import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Globe, Database, ChevronRight, Dog, BookOpenText, Search } from "lucide-react"
import RotatingGlobe from "@/components/rotating-globe"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import HeroSection from "@/components/ui/hero-section"
import SectionHeader from "@/components/ui/section-header"
import content from "@/data/content.json"
import images from "@/data/images.json"

export default function LandingPage() {
  const { site, navigation, pages } = content
  const homeData = pages.home

  return (
    <div className="flex min-h-screen flex-col">
      <Header
        logo={images.logo}
        siteName={site.name}
        navigation={navigation}
        ctaButton={{ label: "Join Our Mission", href: "/contact" }}
      />

      <main className="flex-1">
        <HeroSection
          title={homeData.hero.title}
          subtitle={homeData.hero.subtitle}
          description={homeData.hero.description}
          backgroundImage={images.home.heroBackground}
          cta={homeData.hero.cta}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <RotatingGlobe className="w-full h-full cursor-grab active:cursor-grabbing" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30 pointer-events-none rounded-xl" />
        </HeroSection>

        {/* Mission & Vision Section */}
        <section id="vision-mission" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
            <SectionHeader
              badge={homeData.mission.badge}
              title={homeData.mission.title}
              subtitle={homeData.mission.subtitle}
            />

            <div className="relative max-w-6xl mx-auto">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-green-400 hidden lg:block"></div>

              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                {/* Vision Card */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-green-400 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10 hover:border-green-400/50 transition-all duration-500">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-green-400 rounded-2xl flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="text-green-400 text-sm font-semibold uppercase tracking-wider mb-1">
                            Vision
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white">{homeData.mission.vision.title}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <p className="text-white/80 text-lg leading-relaxed">{homeData.mission.vision.content}</p>
                    </div>
                  </div>
                </div>

                {/* Mission Card */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-green-400 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10 hover:border-green-400/50 transition-all duration-500">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-green-400 rounded-2xl flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="text-green-400 text-sm font-semibold uppercase tracking-wider mb-1">
                            Mission
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white">
                            {homeData.mission.mission.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <p className="text-white/80 text-lg leading-relaxed">{homeData.mission.mission.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-20">
              <div className="inline-flex items-center gap-8 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-8">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Join Our Community</div>
                    <div className="text-sm">Be part of the change</div>
                  </div>
                </div>
                <Link href="/about">
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Discover Our Story
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section id="mission" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <SectionHeader badge={homeData.values.badge} title={homeData.values.title} />

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-10 py-12 md:grid-cols-3">
              {homeData.values.items.map((item, index) => (
                <div key={index} className="flex flex-col items-start">
                  <span className="text-5xl font-bold text-gray-300">{item.number}.</span>
                  <h3 className="mt-2 text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Link href="/about">
                <Button className="bg-green-600 hover:bg-green-700">Learn More About Our Story</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <SectionHeader
              badge={homeData.services.badge}
              title={homeData.services.title}
              subtitle={homeData.services.subtitle}
            />

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-10 md:grid-cols-2 lg:grid-cols-3">
              {homeData.services.items.map((item, index) => {
                const IconComponent = item.icon === "Dog" ? Dog : item.icon === "BookOpenText" ? BookOpenText : Search
                return (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <IconComponent className="h-10 w-10 text-green-600" />
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Insights Section */}
        <section id="insights" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <SectionHeader
              badge={homeData.insights.badge}
              title={homeData.insights.title}
              subtitle={homeData.insights.subtitle}
            />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {homeData.insights.items.map((item, index) => {
                const imageKeys = Object.keys(images.home.insights)
                const imageKey = imageKeys[index]
                const imageSrc = images.home.insights[imageKey as keyof typeof images.home.insights]

                return (
                  <Card key={index}>
                    <CardHeader>
                      <div className="h-48 mb-4 rounded-md overflow-hidden">
                        <Image
                          src={imageSrc || "/placeholder.svg"}
                          alt={item.title}
                          width={300}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.category}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="mt-12 text-center">
              <Link href="/research">
                <Button className="bg-green-600 hover:bg-green-700">View All Updates</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                  {homeData.research.badge}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {homeData.research.title}
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">{homeData.research.subtitle}</p>
                {homeData.research.stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="text-4xl font-bold text-green-600">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </div>
                ))}
                <Link href="/research" className="inline-flex items-center text-green-600 hover:text-green-700">
                  View our research publications
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <Image
                src={images.home.scientificContribution || "/placeholder.svg"}
                width={500}
                height={500}
                alt="Scientists analyzing genetic data in a laboratory"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section id="partners" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10 mx-auto max-w-7xl">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{homeData.partners.title}</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {homeData.partners.subtitle}
              </p>
            </div>
            <div className="grid w-full grid-cols-2 lg:grid-cols-5 items-center justify-center gap-8 lg:gap-12 [&>div]:mx-auto">
              {homeData.partners.items.map((partner, index) => {
                const logoUrl = images.partners.logos[partner.logo as keyof typeof images.partners.logos]
                return (
                  <div key={index} className="flex flex-col items-center">
                    <Image
                      src={logoUrl || "/placeholder.svg"}
                      width={160}
                      height={80}
                      alt={`${partner.name} logo`}
                      className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center p-4"
                    />
                    {/*<p className="mt-2 text-sm font-medium text-center">{partner.name}</p>
                    <p className="text-xs text-muted-foreground">{partner.location}</p>*/}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <SectionHeader
              badge={homeData.contact.badge}
              title={homeData.contact.title}
              subtitle={homeData.contact.subtitle}
            />

            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col gap-4 rounded-xl border bg-card p-6 shadow">
                <h3 className="text-2xl font-bold">{homeData.contact.form.title}</h3>
                <p className="text-muted-foreground">{homeData.contact.form.description}</p>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    {homeData.contact.form.fields.slice(0, 2).map((field) => (
                      <div key={field.id} className="grid gap-2">
                        <label htmlFor={field.id} className="text-sm font-medium leading-none">
                          {field.label}
                        </label>
                        <input
                          id={field.id}
                          type={field.type}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder={field.placeholder}
                        />
                      </div>
                    ))}
                  </div>
                  {homeData.contact.form.fields.slice(2).map((field) => (
                    <div key={field.id} className="grid gap-2">
                      <label htmlFor={field.id} className="text-sm font-medium leading-none">
                        {field.label}
                      </label>
                      {field.type === "textarea" ? (
                        <textarea
                          id={field.id}
                          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder={field.placeholder}
                        />
                      ) : (
                        <input
                          id={field.id}
                          type={field.type}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder={field.placeholder}
                        />
                      )}
                    </div>
                  ))}
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    {homeData.contact.form.submitButton}
                  </Button>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-4">
                <div className="grid gap-2">
                  <h3 className="text-2xl font-bold">{homeData.contact.support.title}</h3>
                  <p className="text-muted-foreground">{homeData.contact.support.description}</p>
                </div>
                <div className="grid gap-6">
                  {homeData.contact.support.items.map((item, index) => {
                    const IconComponent = item.icon === "Leaf" ? Leaf : item.icon === "Globe" ? Globe : Database
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="rounded-full bg-green-100 p-2 text-green-600">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-bold">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <Link href="/contact">
                  <Button variant="outline" className="mt-4 bg-transparent">
                    Join Us
                  </Button>
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
