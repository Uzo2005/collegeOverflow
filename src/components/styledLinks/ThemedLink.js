import Link from 'next/link'

const ThemedLink = ({to, children}) => {
    return (
      <div className="hover:cursor-pointer">
        <Link href={to}>
          <span className="border-b-4 border-red-600">
            {children}
          </span>
        </Link>
      </div>
    );
}
export default ThemedLink
