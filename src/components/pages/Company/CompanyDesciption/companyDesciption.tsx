import "./description.scss";

export default function CompanyDescription({children, className}: {children: any, className: string}) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
