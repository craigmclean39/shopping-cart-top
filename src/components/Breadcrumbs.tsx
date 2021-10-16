import { HeaderProps } from '../types';

export const Breadcrumbs: React.FC<HeaderProps> = ({ links }) => {
  const breadcrumbLinks: JSX.Element[] = [];
  for (let i = 0; i < links.length; i++) {
    breadcrumbLinks.push(links[i]);
    if (i !== links.length - 1) {
      breadcrumbLinks.push(<div className='breadcrumb-divider'>{`>`}</div>);
    }
  }
  return <div className='breadcrumbs-container'>{breadcrumbLinks}</div>;
};
