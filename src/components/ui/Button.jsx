import { cn } from '../../lib/utils';

export default function Button({ href, children, variant = 'secondary', external = false, download = false }) {
  const className = cn('button', `button-${variant}`);
  const safeExternal = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <a className={className} href={href} download={download || undefined} {...safeExternal}>
      {children}
    </a>
  );
}