import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import SectionHeader from "@/components/ui/section-header"
import content from "@/data/content.json"
import images from "@/data/images.json"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const { site, navigation, pages } = content
  const aboutData = pages.about

  return (
    <div className="flex min-h-screen flex-col">
      <Header
        logo={images.logo}
        siteName={site.name}
        navigation={navigation}
        ctaButton={{ label: "Join Our Mission", href: "/contact" }}
      />

      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="w-full py-6 bg-green-50">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl lg:px-8 xl:px-12">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-green-600 hover:text-green-700 flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" />
                Home
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-muted-foreground">About</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="w-full h-64 md:h-80 lg:h-96 relative bg-gradient-to-r from-green-800 to-green-600">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
            style={{ backgroundImage: `url(${images.about.banner})` }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{aboutData.hero.title}</h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">{aboutData.hero.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Foundation Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <SectionHeader
              badge={aboutData.foundation.badge}
              title={aboutData.foundation.title}
              subtitle={aboutData.foundation.subtitle}
            />
            <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
              <p className="text-muted-foreground">{aboutData.foundation.content}</p>
            </div>
          </div>
        </section>

        {/* Milestones Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <SectionHeader badge={aboutData.milestones.badge} title="Our Journey" />

            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
              {aboutData.milestones.items.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-md flex flex-col gap-4">
                  <h3 className="text-xl font-semibold text-green-800">{item.title}</h3>
                  {item.category && (
                    <span className="text-sm text-green-600 font-medium uppercase tracking-wide">{item.category}</span>
                  )}
                  <p className="text-gray-700 text-sm">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <SectionHeader badge={aboutData.team.badge} title={aboutData.team.title} />

            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
              {aboutData.team.members.map((member, index) => {
                const key = member.name
                  .toLowerCase()
                  .replace(/dr\.?\s*/g, "")
                  .replace(/[\s.'"]/g, "")

                const imageUrl = images.about.team[key as keyof typeof images.about.team]

                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-2xl shadow-md"
                  >
                    <Image
                      src={imageUrl || "/placeholder.svg?height=128&width=128&text=Team+Member"}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-32 h-32 rounded-full object-cover mb-4"
                    />
                    <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                    {member.role && <p className="text-sm text-green-600">{member.role}</p>}
                    {member.description && <p className="text-sm text-gray-600 mt-2">{member.description}</p>}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <SectionHeader badge={aboutData.principles.badge} title={aboutData.principles.title} />
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {aboutData.principles.items.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-md">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Join Our Mission?</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Discover how you can contribute to preserving genetic biodiversity for future generations.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="bg-green-600 hover:bg-green-700">Get Involved</Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline">Explore Our Services</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer
        logo={images.logo}
        siteName={site.name}
        tagline={site.tagline}
        navigation={navigation}
        contact={site.contact}
      />
    </div>
  )
}
