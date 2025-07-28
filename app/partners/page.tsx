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
import {
  ArrowLeft,
  Globe,
  Users,
  Building,
  Award,
  Mail,
  Phone,
} from "lucide-react";
import images from "@/data/images.json";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import content from "@/data/content.json";

const partnershipTypes = [
  {
    icon: Globe,
    title: "Research Collaboration",
    description:
      "Joint research projects, data sharing, and scientific publications to advance genetic diversity knowledge.",
    count: "15+ Active Projects",
  },
  {
    icon: Users,
    title: "Community Partnerships",
    description:
      "Working with local communities, farmers, and indigenous groups to preserve traditional breeds and knowledge.",
    count: "200+ Communities",
  },
  {
    icon: Building,
    title: "Institutional Alliances",
    description:
      "Strategic partnerships with universities, research institutes, and conservation organizations worldwide.",
    count: "50+ Institutions",
  },
  {
    icon: Award,
    title: "Government Cooperation",
    description:
      "Collaborating with national and regional governments to develop and implement conservation policies.",
    count: "30+ Countries",
  },
];

export default function PartnersPage() {
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
              <span className="text-muted-foreground">Partners</span>
            </div>
          </div>
        </section>

        {/* Hero Banner */}
        <section className="w-full h-64 md:h-80 lg:h-96 relative bg-gradient-to-r from-green-800 to-green-600">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
            style={{ backgroundImage: `url(${images.partners.banner})` }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Our Partners
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
                Building a global network for biodiversity conservation through
                strategic partnerships and collaboration
              </p>
            </div>
          </div>
        </section>

        {/* Partnership Pillars - Visual Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl lg:px-8 xl:px-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                  Our Partnership Pillars
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Building Strong Partnerships
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Collaborating for a sustainable future through three key
                  partnership areas
                </p>
              </div>
            </div>

            {/* Partnership Pillars Grid */}
            <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
              <Card className="bg-green-50 border-green-200">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-white bg-white flex items-center justify-center">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">
                    Local Farms Initiative
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Our collaboration with local farms aims to integrate
                    traditional breeding practices with modern conservation
                    efforts. This initiative not only supports farmers but also
                    promotes the preservation of unique breeds vital for
                    biodiversity.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-white flex items-center justify-center">
                    <Building className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">
                    Research Collaborations
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground text-sm">
                    We partner with academic institutions and research
                    organizations to advance our knowledge of genetics and
                    conservation strategies. These collaborations facilitate
                    groundbreaking research that informs our practices and
                    enhances our impact.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-white flex items-center justify-center">
                    <Globe className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">
                    Global Conservation Networks
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground text-sm">
                    As part of global conservation networks, we engage with
                    international stakeholders to share knowledge and best
                    practices. This network reinforces our commitment to a
                    worldwide effort in safeguarding genetic diversity and
                    promoting sustainable agricultural practices.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Become a Partner */}
        <section className="w-full py-12 md:py-24 bg-green-50">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl lg:px-8 xl:px-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                  Key Partners
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our Global Network
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We collaborate with leading organizations worldwide that share
                  our commitment to genetic diversity conservation and
                  sustainable agriculture.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 h-20 w-32 flex items-center justify-center bg-white">
                    <Image
                      src={
                        images.partners.logos.globalCanopyProgramme ||
                        "/placeholder.svg"
                      }
                      alt="The Global Canopy Programme"
                      width={120}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <CardTitle>The Global Canopy Programme (GCP)</CardTitle>
                  <CardDescription className="text-green-600 font-medium">
                    United Kingdom
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Focuses on rainforest conservation and biodiversity,
                    including efforts related to endangered livestock species
                    and their habitats.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 h-20 w-32 flex items-center justify-center bg-white">
                    <Image
                      src={images.partners.logos.ilri || "/placeholder.svg"}
                      alt="International Livestock Research Institute"
                      width={90}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <CardTitle>
                    International Livestock Research Institute (ILRI)
                  </CardTitle>
                  <CardDescription className="text-green-600 font-medium">
                    Kenya/Ethiopia
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Works to improve food security and reduce poverty by
                    enhancing livestock systems and the genetic resources of
                    animals.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 h-20 w-32 flex items-center justify-center bg-white">
                    <Image
                      src={
                        images.partners.logos.biodiversityInternational ||
                        "/placeholder.svg"
                      }
                      alt="Biodiversity International"
                      width={90}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <CardTitle>Biodiversity International</CardTitle>
                  <CardDescription className="text-green-600 font-medium">
                    Italy
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Conservation and use of agricultural biodiversity, including
                    animal genetic resources for sustainable food systems.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 h-20 w-32 flex items-center justify-center bg-white">
                    <Image
                      src={images.partners.logos.fao || "/placeholder.svg"}
                      alt="Food and Agriculture Organization"
                      width={70}
                      height={30}
                      className="object-contain"
                    />
                  </div>
                  <CardTitle>Food and Agriculture Organization (FAO)</CardTitle>
                  <CardDescription className="text-green-600 font-medium">
                    International
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground text-sm">
                    UN programs focused on conservation of animal genetic
                    resources globally, including the Global Strategy for Farm
                    Animal Genetic Resources.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 h-20 w-32 flex items-center justify-center bg-white">
                    <Image
                      src={images.partners.logos.rbst || "/placeholder.svg"}
                      alt="Rare Breeds Survival Trust"
                      width={120}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <CardTitle>Rare Breeds Survival Trust (RBST)</CardTitle>
                  <CardDescription className="text-green-600 font-medium">
                    United Kingdom
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Conservation of rare and endangered farm animal breeds,
                    promoting awareness and safeguarding traditional livestock.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 h-20 w-32 flex items-center justify-center bg-white">
                    <Image
                      src={
                        images.partners.logos.livestockConservancy ||
                        "/placeholder.svg"
                      }
                      alt="The Livestock Conservancy"
                      width={120}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <CardTitle>The Livestock Conservancy</CardTitle>
                  <CardDescription className="text-green-600 font-medium">
                    United States
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Dedicated to conservation of endangered breeds of livestock
                    and poultry, providing educational resources for heritage
                    breeds.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 h-20 w-32 flex items-center justify-center bg-white">
                    <Image
                      src={images.partners.logos.wwf || "/placeholder.svg"}
                      alt="World Wildlife Fund"
                      width={120}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <CardTitle>World Wildlife Fund (WWF)</CardTitle>
                  <CardDescription className="text-green-600 font-medium">
                    International
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Wildlife conservation with focus on preserving livestock
                    biodiversity and integrating it into broader conservation
                    strategies.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 h-20 w-32 flex items-center justify-center bg-white">
                    <Image
                      src={images.partners.logos.ecaf || "/placeholder.svg"}
                      alt="European Conservation Agriculture Federation"
                      width={120}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <CardTitle>
                    European Conservation Agriculture Federation
                  </CardTitle>
                  <CardDescription className="text-green-600 font-medium">
                    Europe
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Promoting sustainable agricultural practices including
                    conservation of animal genetic resources and biodiversity.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 h-20 w-32 flex items-center justify-center bg-white">
                    <Image
                      src={
                        images.partners.logos.nativeSeedSearch ||
                        "/placeholder.svg"
                      }
                      alt="Native Seed/SEARCH"
                      width={80}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <CardTitle>Native Seed/SEARCH</CardTitle>
                  <CardDescription className="text-green-600 font-medium">
                    United States
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Conservation of domesticated animal breeds and genetic
                    diversity through sustainable agriculture practices.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <div className="max-w-2xl mx-auto space-y-4">
                <h3 className="text-2xl font-bold">
                  Ready to Partner with Us?
                </h3>
                <p className="text-muted-foreground">
                  Contact our partnerships team to explore collaboration
                  opportunities and learn how we can work together to preserve
                  genetic biodiversity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-green-600 hover:bg-green-700 flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    hrichard86@yahoo.fr
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 bg-transparent"
                  >
                    <Phone className="h-4 w-4" />
                    Schedule a Call
                  </Button>
                </div>
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
