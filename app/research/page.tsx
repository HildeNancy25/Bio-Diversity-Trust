import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, Download, FileText, Users } from "lucide-react";
import images from "@/data/images.json";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import content from "@/data/content.json";

export default function ResearchPage() {
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
              <span className="text-muted-foreground">Research</span>
            </div>
          </div>
        </section>

        {/* Hero Banner */}
        <section className="w-full h-64 md:h-80 lg:h-96 relative bg-gradient-to-r from-green-800 to-green-600">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
            style={{ backgroundImage: `url(${images.research.banner})` }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Our Research
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
                Exploring genetic diversity through scientific inquiry and
                collaborative research
              </p>
            </div>
          </div>
        </section>

        {/* Research Papers Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl lg:px-8 xl:px-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                  Scientific Publications
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Latest Research Papers
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our peer-reviewed publications and scientific
                  contributions to genetic diversity preservation
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:px-16 xl:px-32">
              <Card>
                <CardHeader>
                  <div className="h-48 mb-4 bg-green-100 rounded-md flex items-center justify-center">
                    <FileText className="h-12 w-12 text-green-600" />
                  </div>
                  <CardTitle>
                    The Cultural Significance of Animal Breeds
                  </CardTitle>
                  <CardDescription> Vol. 13 No. 03 (2025)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    This study aimed to enhance the genetic improvement of
                    indigenous chickens in Rwanda through phenotypic and genetic
                    characterization to identify superior genotypes for
                    sustainable breeding programs.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        Dr. R. Habimana et al.
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1 bg-transparent"
                    >
                      <Download className="h-4 w-4" />
                      PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-48 mb-4 bg-green-100 rounded-md flex items-center justify-center">
                    <FileText className="h-12 w-12 text-green-600" />
                  </div>
                  <CardTitle>
                    The Importance of Genetic Diversity in Agriculture
                  </CardTitle>
                  <CardDescription>
                    Published in Conservation Biology, February 2025
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    A comprehensive analysis of genomic approaches to
                    conservation of endangered species and their application in
                    biodiversity preservation.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        Dr. C. K. Tiambo et al.
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1 bg-transparent"
                    >
                      <Download className="h-4 w-4" />
                      PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-48 mb-4 bg-green-100 rounded-md flex items-center justify-center">
                    <FileText className="h-12 w-12 text-green-600" />
                  </div>
                  <CardTitle>
                    Conservation Strategies for Endangered Breeds
                  </CardTitle>
                  <CardDescription>
                    Published in Environmental Management, January 2025
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    This paper evaluates the effectiveness of community-based
                    conservation models in preserving local genetic resources
                    and traditional knowledge.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        Dr. C. Hirwa et al.
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1 bg-transparent"
                    >
                      <Download className="h-4 w-4" />
                      PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-10 text-center">
              <Button className="bg-green-600 text-white hover:bg-green-700">
                View All Publications
              </Button>
            </div>
          </div>
        </section>

        {/* Looking Ahead: Our Future Vision */}
        <section className="w-full py-12 md:py-24 bg-green-50">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl lg:px-8 xl:px-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Looking Ahead: Our Future Vision
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our vision for the future involves expanding our research
                  efforts, fostering global collaborations, and implementing
                  innovative conservation strategies to safeguard genetic
                  diversity for generations to come.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Expanding Research Scope</CardTitle>
                    <CardDescription>
                      Venturing into new areas of genetic research and
                      exploration.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    We aim to broaden our research to include a wider array of
                    species and ecosystems, deepening our understanding of
                    genetic diversity.
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Global Collaboration</CardTitle>
                    <CardDescription>
                      Building partnerships with researchers and organizations
                      worldwide.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    We seek to establish collaborations with leading research
                    institutions and conservation organizations across the globe
                    to maximize our impact.
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Innovative Conservation</CardTitle>
                    <CardDescription>
                      Implementing cutting-edge strategies for genetic
                      preservation.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    We are committed to developing and implementing innovative
                    conservation strategies that leverage the latest
                    technologies and scientific advancements.
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl lg:px-8 xl:px-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Interested in Collaborating?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  We welcome research partnerships and collaborative
                  opportunities
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Contact Our Research Team
                  </Button>
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
        siteName={content.site.name}
        tagline={content.site.tagline}
        navigation={content.navigation}
        contact={content.site.contact}
      />
    </div>
  );
}
