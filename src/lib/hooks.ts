import { useEffect, useSyncExternalStore } from "react";

type UseMetaProps = {
  title: string;
  description?: string
}

// The initial class on <html> is set by the inline script in index.html.
function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle('dark', dark);
  document.documentElement.classList.toggle('light', !dark);
}

function savedTheme() {
  try {
    return localStorage.getItem('theme');
  } catch {
    return null;
  }
}

function subscribeTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  // Follow the OS setting until the user picks a theme.
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const onSystemChange = () => { if (!savedTheme()) applyTheme(mq.matches) };
  mq.addEventListener('change', onSystemChange);
  return () => {
    observer.disconnect();
    mq.removeEventListener('change', onSystemChange);
  };
}

export function useTheme() {
  const isDark = useSyncExternalStore(
    subscribeTheme,
    () => document.documentElement.classList.contains('dark'),
    () => false
  );
  const toggle = () => {
    applyTheme(!isDark);
    try {
      localStorage.setItem('theme', isDark ? 'light' : 'dark');
    } catch { /* private mode: theme just won't persist */ }
  };
  return [isDark, toggle] as const;
}

export function useMeta({ title, description }: UseMetaProps) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = description;
        document.head.appendChild(meta);
      }
    }
  }, [title, description]);
}