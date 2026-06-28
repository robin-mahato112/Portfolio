import { cn } from '../../lib/utils';

export default function Badge({ children, tone = 'default', className = '' }) {
  return <span className={cn('badge', tone === 'winner' && 'badge-winner', className)}>{children}</span>;
}