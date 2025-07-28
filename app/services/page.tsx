import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import images from "@/data/images.json";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import content from "@/data/content.json";

const testimonials = [
  {
    name: "A Family's Journey with Heritage Breeds",
    role: "Guest Review",
    image: images.services.testimonials.familyJourney,
    message:
      "One family in rural America has successfully reintroduced heritage breeds into their farm, significantly enhancing their biodiversity. Their story exemplifies how local efforts can lead to significant conservation impacts, inspiring others in the community to follow suit.",
  },
  {
    name: "Reviving Lost Breeds",
    role: "Work Review",
    image: images.services.testimonials.revivingBreeds,
    message:
      "Through our partnership with local farmers, we successfully revived a nearly extinct breed of cattle. This initiative not only preserved genetic diversity but also helped improve the farmers' livelihoods, proving that conservation and economic sustainability can go hand in hand.",
  },
  {
    name: "Community Engagement Success",
    role: "Work Review",
    image: images.services.testimonials.communitySuccess,
    message:
      "Our community outreach programs have led to increased awareness and participation in genetic diversity initiatives. Testimonials from participants highlight the positive changes in their perspectives on conservation and the impact on their local ecosystems.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header
        logo={images.logo}
        siteName={content.site.name}
        navigation={content.navigation}
        ctaButton={{ label: "Join Our Mission", href: "/contact" }}
      />

      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="w-full py-6 bg-green-50">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl lg:px-8 xl:px-12">
            <div className="flex items-center gap-2 text-sm">
              <Link
                href="/"
                className="text-green-600 hover:text-green-700 flex items-center gap-1"
              >
                <ArrowLeft className="h-4 w-4" />
                Home
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-muted-foreground">Services</span>
            </div>
          </div>
        </section>

        {/* Hero Banner */}
        <section className="w-full h-64 md:h-80 lg:h-96 relative bg-gradient-to-r from-green-800 to-green-600">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
            style={{ backgroundImage: `url(${images.services.banner})` }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Our Services
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
                Discover how we're working to preserve genetic diversity through
                education, and community engagement
              </p>
            </div>
          </div>
        </section>

        {/* Workshop Booking Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl lg:px-8 xl:px-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                  Educational Opportunities
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Book Your Workshop
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join us in our mission to protect genetic diversity through
                  education and hands-on learning
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-1">
              <Card className="grid md:grid-cols-2 bg-green-50">
                <div className="m-4 rounded-md flex items-center justify-center p-8">
                  <Image
                    src={
                      images.services.workshops.geneticPreservation ||
                      "/placeholder.svg"
                    }
                    width={500}
                    height={400}
                    alt="Genetic Preservation Techniques Workshop"
                    className="rounded-md object-cover"
                  />
                </div>
                <div>
                  <CardHeader>
                    <CardTitle>Genetic Preservation Techniques</CardTitle>
                    <CardDescription>
                      Hands-on training for conservation professionals
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      This workshop provides hands-on training in preserving
                      genetic diversity. Learn about cryopreservation, breeding
                      strategies, and gene banks to help protect local breeds.
                    </p>
                    <div className="space-y-2">
                      <label
                        htmlFor="workshop-date"
                        className="text-sm font-medium"
                      >
                        Select date and time
                      </label>
                      <input
                        id="workshop-date"
                        type="datetime-local"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                      <p className="text-xs text-muted-foreground">
                        Event time zone: Central Africa Time GMT+2
                      </p>
                    </div>
                    <Button className="bg-green-600 hover:bg-green-700 p-4">
                      Book Now
                    </Button>
                  </CardContent>
                </div>
              </Card>

              {/*volunteer section*/}

              <div className="flex flex-col items-center justify-center space-y-4 text-center my-10">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                    Volunteer Opportunities
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Get Involved
                  </h2>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Join us in making a difference through volunteer work.
                  </p>
                </div>
              </div>

              <Card className="grid md:grid-cols-2 bg-green-50">
                <div className="m-4 rounded-md flex items-center justify-center p-8">
                  <Image
                    src={
                      images.services.volunteers.fieldResearch ||
                      "/placeholder.svg"
                    }
                    width={500}
                    height={400}
                    alt="Field Research"
                    className="rounded-md object-cover"
                  />
                </div>
                <div>
                  <CardHeader>
                    <CardTitle>Field Research Assistant</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      As a Field Research Assistant, you will support our
                      conservation projects by collecting data on various animal
                      breeds and their habitats. This role is essential for our
                      ongoing studies and helps inform our conservation
                      strategies. Volunteers will gain valuable experience in
                      fieldwork and contribute to meaningful research that
                      impacts animal diversity preservation.
                    </p>
                    <Button className="bg-green-600 hover:bg-green-700 p-4">
                      Join Now
                    </Button>
                  </CardContent>
                </div>
              </Card>

              <Card className="grid md:grid-cols-2 bg-green-50">
                <div className="m-4 rounded-md flex items-center justify-center p-8">
                  <Image
                    src={
                      images.services.volunteers.communityOutreach ||
                      "/placeholder.svg"
                    }
                    width={500}
                    height={400}
                    alt="Community Outreach"
                    className="rounded-md object-cover"
                  />
                </div>
                <div>
                  <CardHeader>
                    <CardTitle>Community Outreach Coordinator</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      In this role, you will engage with local communities to
                      promote awareness of genetic diversity and its importance.
                      By organizing workshops, presentations, and educational
                      events, you will help foster a culture of conservation.
                      This position is perfect for individuals passionate about
                      education and community engagement, as you will play a key
                      role in inspiring others to take part in our mission.
                    </p>
                    <Button className="bg-green-600 hover:bg-green-700 p-4">
                      Join Now
                    </Button>
                  </CardContent>
                </div>
              </Card>

              <Card className="grid md:grid-cols-2 bg-green-50">
                <div className="m-4 rounded-md flex items-center justify-center p-8">
                  <Image
                    src={
                      images.services.volunteers.socialMedia ||
                      "/placeholder.svg"
                    }
                    width={500}
                    height={400}
                    alt="Social Media"
                    className="rounded-md object-cover"
                  />
                </div>
                <div>
                  <CardHeader>
                    <CardTitle>Social Media Advocate</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      As a Social Media Advocate, you will use your creativity
                      to spread the word about our initiatives and successes. By
                      crafting compelling posts and sharing stories about
                      genetic diversity, you will help us reach a broader
                      audience and mobilize support for our cause. This
                      volunteer position is ideal for those with a knack for
                      communication and a desire to make an impact online.
                    </p>
                    <Button className="bg-green-600 hover:bg-green-700 p-4">
                      Join Now
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Impact Section */}
        <section className="w-full py-10 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl lg:px-8 xl:px-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                  Success Stories
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our Impact
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Real stories of how our work is making a difference in
                  communities around the world
                </p>
              </div>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
              {testimonials.map((t, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition duration-300"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex flex-col items-center">
                      <Image
                        src={t.image || "/placeholder.svg"}
                        alt={t.name}
                        width={200}
                        height={300}
                        className="rounded-sm mb-2"
                      />
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-sm italic text-muted-foreground">
                        {t.role}
                      </p>
                      <p className="mt-3 text-muted-foreground">{t.message}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button className="bg-green-600 text-white hover:bg-green-700">
                View All Testimonials
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl lg:px-8 xl:px-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Ready to Make a Difference?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Join us in our mission to preserve genetic diversity for
                  future generations
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/#contact">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Contact Us Today
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline">Learn More About Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer
        logo={images.logo}
        siteName={content.site.name}
        tagline={content.site.tagline}
        navigation={content.navigation}
        contact={content.site.contact}
      />
    </div>
  );
}
