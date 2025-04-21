
import React from 'react';
import { Button as ShadcnButton } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight, Download, ExternalLink } from 'lucide-react';

type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'primary';
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';
type ButtonIcon = 'arrow' | 'download' | 'external' | 'none';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ButtonIcon;
  className?: string;
  href?: string;
  onClick?: () => void;
  download?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  children,
  variant = 'default',
  size = 'default',
  icon = 'none',
  className,
  href,
  onClick,
  download = false,
  type = 'button',
}: ButtonProps) => {
  const getIcon = () => {
    switch (icon) {
      case 'arrow':
        return <ArrowRight className="ml-2 h-4 w-4" />;
      case 'download':
        return <Download className="ml-2 h-4 w-4" />;
      case 'external':
        return <ExternalLink className="ml-2 h-4 w-4" />;
      default:
        return null;
    }
  };

  const buttonContent = (
    <>
      {children}
      {getIcon()}
    </>
  );

  if (href) {
    return (
      <ShadcnButton
        variant={variant as any}
        size={size}
        className={cn('rounded-md', className)}
        asChild
      >
        <a href={href} download={download}>
          {buttonContent}
        </a>
      </ShadcnButton>
    );
  }

  return (
    <ShadcnButton
      variant={variant as any}
      size={size}
      className={cn('rounded-md', className)}
      onClick={onClick}
      type={type}
    >
      {buttonContent}
    </ShadcnButton>
  );
};

export default Button;
