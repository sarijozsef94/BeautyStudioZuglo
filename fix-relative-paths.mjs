import fs from 'fs';
import path from 'path';

function processDir(dir, depth = 0) {
  const prefix = depth === 0 ? './' : '../'.repeat(depth);
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== '_next') {
        processDir(fullPath, depth + 1);
      }
    } else if (entry.name.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace absolute paths with relative paths
      content = content.replace(/href="\/_next\//g, `href="${prefix}_next/`);
      content = content.replace(/src="\/_next\//g, `src="${prefix}_next/`);
      content = content.replace(/href="\/logo\.png"/g, `href="${prefix}logo.png"`);
      content = content.replace(/src="\/logo\.png"/g, `src="${prefix}logo.png"`);
      content = content.replace(/href="\/favicon/g, `href="${prefix}favicon`);
      content = content.replace(/src="\/favicon/g, `src="${prefix}favicon`);
      content = content.replace(/src="\/images\//g, `src="${prefix}images/`);
      content = content.replace(/href="\/images\//g, `href="${prefix}images/`);
      
      // Relative page links for file:// navigation
      content = content.replace(/href="\/"/g, `href="${prefix}index.html"`);
      content = content.replace(/href="\/rolunk\/"/g, `href="${prefix}rolunk/index.html"`);
      content = content.replace(/href="\/szolgaltatasok\/"/g, `href="${prefix}szolgaltatasok/index.html"`);
      content = content.replace(/href="\/arlista\/"/g, `href="${prefix}arlista/index.html"`);
      content = content.replace(/href="\/galeria\/"/g, `href="${prefix}galeria/index.html"`);
      content = content.replace(/href="\/kapcsolat\/"/g, `href="${prefix}kapcsolat/index.html"`);
      content = content.replace(/href="\/adatvedelem\/"/g, `href="${prefix}adatvedelem/index.html"`);

      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`Processed relative paths in: ${fullPath} (depth: ${depth})`);
    }
  }
}

processDir('out', 0);
console.log('Finished converting paths to relative for standalone offline / web usage.');
