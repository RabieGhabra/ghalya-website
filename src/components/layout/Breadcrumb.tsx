import Link from "next/link";
interface BreadcrumbProps {
  title: React.ReactNode;
  parent?: {
    label: string;
    href: string;
  };
  className?: string;
}
export default function Breadcrumb({
  title,
  parent,
  className = "mt-10 ml-4",
}: BreadcrumbProps) {
  return (
    <nav className={className} aria-label="Breadcrumb">
      <ol className="w-full max-w-6xl flex flex-wrap items-start gap-x-2 text-left">
        <li>
          <Link
            href="/"
            className="font-['Lexend_Deca',Helvetica] font-extralight text-lg sm:text-xl lg:text-[28px] text-gray-500 hover:text-pink-600 transition-colors"
          >
            Home
          </Link>
        </li>
        {parent && (
          <>
            <li className="text-lg sm:text-xl lg:text-[28px] text-gray-500">
              &gt;
            </li>
            <li>
              <Link
                href="/our-partners"
                className="font-['Lexend_Deca',Helvetica] font-extralight text-lg sm:text-xl lg:text-[28px] text-gray-500 hover:text-pink-600 transition-colors"
              >
                {parent.label}
              </Link>
            </li>
          </>
        )}
        <li className="text-lg sm:text-xl lg:text-[28px] text-gray-500">
          &gt;
        </li>
        <li className="font-['Lexend_Deca',Helvetica] font-normal text-lg sm:text-xl lg:text-[28px] text-pink-600">
          {title}
        </li>
      </ol>
    </nav>
  );
}
