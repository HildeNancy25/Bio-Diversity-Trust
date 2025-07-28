import Link from "next/link"
import Image from "next/image"

interface FooterProps {
  logo: string
  siteName: string
  tagline: string
  navigation: Array<{ label: string; href: string }>
  contact: {
    phone: string
    email: string
    address: {
      poBox: string
      street: string
    }
    hours: {
      weekdays: string
      saturday: string
    }
  }
}

export default function Footer({ logo, siteName, tagline, navigation, contact }: FooterProps) {
  return (
    <footer className="w-full bg-green-50 border-t pt-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Logo & Tagline */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Image
                src={logo || "/placeholder.svg"}
                width={32}
                height={32}
                alt={`${siteName} Logo`}
                className="rounded-md"
              />
              <span className="text-2xl font-semibold text-green-700">{siteName}</span>
            </div>
            <p className="text-sm text-gray-500 max-w-sm">{tagline}</p>
          </div>

          {/* Vertical Navigation */}
          <nav className="flex flex-col gap-3 text-sm font-medium text-gray-600">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-green-600">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact & Office Info */}
          <div className="flex flex-col gap-2 text-sm text-gray-600">
            <p>
              <strong>P.O. Box:</strong> {contact.address.poBox}
            </p>
            <p>
              <strong>Address:</strong> {contact.address.street}
            </p>
            <p>
              <strong>Office Hours:</strong>
            </p>
            <ul className="ml-4 list-disc">
              <li>{contact.hours.weekdays}</li>
              <li>{contact.hours.saturday}</li>
            </ul>
            <p>
              <strong>Phone:</strong>{" "}
              <a href={`tel:${contact.phone}`} className="hover:text-green-600">
                {contact.phone}
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contact.email}`} className="hover:text-green-600">
                {contact.email}
              </a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between gap-6 pb-10 text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} {siteName}. All rights reserved.
          </p>
          <nav className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
            <Link href="#" className="hover:text-green-600 transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-green-600 transition">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-green-600 transition">
              Cookie Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
