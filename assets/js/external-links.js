// assets/js/external-links.js
(() => {
  const run = () => {
    const { hostname, origin } = location;
    const baseRoot = hostname.includes('.') ? hostname.split('.').slice(-2).join('.') : hostname;
    const isHash = h => !h || h.startsWith('#');
    const isInternal = href => {
      try {
        const u = new URL(href, origin);
        if (!/^https?:$/i.test(u.protocol)) return true;
        if (u.hostname === hostname) return true;
        if (u.hostname.endsWith('.' + baseRoot)) return true;
        if ((hostname === 'localhost' || hostname === '127.0.0.1') &&
            (u.hostname === 'localhost' || u.hostname === '127.0.0.1')) return true;
        return false;
      } catch {
        return true;
      }
    };

    document.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href');
      if (isHash(href) || a.hasAttribute('download')) return;
      const proto = href.split(':')[0].toLowerCase();
      if (['mailto','tel','javascript','data','blob'].includes(proto)) return;

      const rel = (a.getAttribute('rel') || '').toLowerCase().split(/\s+/);
      const forceIn  = rel.includes('internal') || a.classList.contains('sametab');
      const forceOut = rel.includes('external') || a.classList.contains('newtab');
      if (forceIn) return;
      const external = forceOut || !isInternal(href);
      if (!external) return;

      a.target = '_blank';
      a.relList.add('noopener','noreferrer');
      a.classList.add('ext');
    });
  };
  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', run)
    : run();
})();
