import Link from "next/link";
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
  Download,
  FileText,
  Users,
  HelpCircle,
  BookOpen,
} from "lucide-react";
import images from "@/data/images.json";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import content from "@/data/content.json";

const faqs = [
  {
    question: "Why is genetic diversity important?",
    answer:
      "Genetic diversity is vital for the survival and adaptability of species. It enhances resilience against diseases, environmental changes, and other pressures. In agriculture, diverse breeds contribute to food security and the stability of ecosystems. By promoting genetic diversity, we can ensure sustainable farming practices and maintain the health of our agricultural systems.",
  },
  {
    question: "How does Genetic Diversity Trust support conservation efforts?",
    answer:
      "Genetic Diversity Trust supports conservation by conducting research, developing educational resources, and collaborating with stakeholders to implement effective conservation strategies. We provide guidance and tools that empower communities and organizations to protect endangered breeds and promote sustainable practices. Our approach is rooted in scientific evidence and community engagement.",
  },
  {
    question: "What can I do to help preserve genetic diversity?",
    answer:
      "Individuals can contribute by raising awareness about the importance of genetic diversity, supporting local breed conservation initiatives, and choosing to purchase products from diverse livestock breeds. Engaging in community programs and advocating for policies that protect traditional breeds are also effective ways to make a positive impact in preserving genetic diversity.",
  },
];

const resources = [
  {
    title: "Guide to Assessing Genetic Diversity",
    description:
      "This comprehensive guide provides stakeholders with methods and tools for assessing genetic diversity within livestock populations. It includes protocols for sampling, data analysis, and interpretation of results, enabling users to make informed decisions about breed management.",
    category: "Assessment Tools",
    icon: FileText,
  },
  {
    title: "Toolkit for Sustainable Breeding Practices",
    description:
      "The toolkit is designed to assist breeders in implementing sustainable breeding practices that prioritize genetic diversity. It features best practices, case studies, and checklists to facilitate the adoption of strategies that reduce inbreeding and promote healthier populations.",
    category: "Breeding Guidelines",
    icon: BookOpen,
  },
  {
    title: "Community Engagement Resources",
    description:
      "This resource offers strategies and materials for engaging local communities in genetic diversity initiatives. It includes outreach templates, workshop outlines, and success stories that can inspire action. Effective community involvement is critical for the preservation of local breeds and their genetic heritage.",
    category: "Community Outreach",
    icon: Users,
  },
];

const publications = [
  {
    title: "The Cultural Significance of Animal Breeds",
    description:
      "This research paper explores the cultural heritage associated with various animal breeds across different regions. It emphasizes the connection between genetic diversity and cultural identity, illustrating how traditional practices are intertwined with the preservation of specific breeds.",
    category: "Cultural Studies",
  },
  {
    title: "The Importance of Genetic Diversity in Agriculture",
    description:
      "This publication delves into the crucial role that genetic diversity plays in sustainable agriculture. It highlights various case studies where diverse livestock breeds have contributed to resilience against diseases and climate change.",
    category: "Agricultural Research",
  },
  {
    title: "Conservation Strategies for Endangered Breeds",
    description:
      "In this article, we examine successful conservation strategies implemented to protect endangered animal breeds. Through the analysis of various programs worldwide, we demonstrate how targeted efforts can revitalize populations and restore genetic diversity.",
    category: "Conservation Methods",
  },
];

export default function ResourcesPage() {
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
              <span className="text-muted-foreground">Resources</span>
            </div>
          </div>
        </section>

        {/* Hero Banner */}
        <section className="w-full h-64 md:h-80 lg:h-96 relative bg-gradient-to-r from-green-800 to-green-600">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
            style={{ backgroundImage: `url(${images.resources.banner})` }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Resources & FAQs
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
                Essential guides, tools, and answers to help you understand and
                support genetic diversity conservation
              </p>
            </div>
          </div>
        </section>

        {/* Essential Guides */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl lg:px-8 xl:px-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                  Essential Guides for Stakeholders
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Tools to Support Genetic Diversity Initiatives
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Comprehensive resources designed to empower communities,
                  researchers, and conservationists
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {resources.map((resource, index) => (
                <Card key={index} className="bg-white">
                  <CardHeader>
                    <div className="rounded-full bg-green-100 p-2 w-12 h-12 flex items-center justify-center mb-4">
                      <resource.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                    <CardDescription className="text-green-600 font-medium">
                      {resource.category}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm">
                      {resource.description}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      This resource is invaluable for anyone involved in animal
                      husbandry.
                    </p>
                    <Button className="w-full bg-green-600 hover:bg-green-700 flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Download Guide
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Common Inquiries / FAQs */}
        <section className="w-full py-12 md:py-24 bg-green-50">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl lg:px-8 xl:px-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                  Common Inquiries
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Find answers to the most common questions about genetic
                  diversity and our conservation efforts
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-white">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-green-100 p-2 flex-shrink-0">
                        <HelpCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground pl-12">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Research Publications */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl lg:px-8 xl:px-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                  Research Publications
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Latest Research and Findings
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Explore our scientific contributions to genetic diversity
                  conservation
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {publications.map((publication, index) => (
                <Card key={index} className="bg-white">
                  <CardHeader>
                    <div className="h-48 mb-4 bg-green-100 rounded-md flex items-center justify-center">
                      <FileText className="h-12 w-12 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">
                      {publication.title}
                    </CardTitle>
                    <CardDescription className="text-green-600 font-medium">
                      {publication.category}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm">
                      {publication.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">
                        Published 2025
                      </span>
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
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/research">
                <Button className="bg-green-600 hover:bg-green-700">
                  View All Publications
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-12 md:py-24 bg-green-50">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl lg:px-8 xl:px-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Need More Information?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Contact our team for additional resources or specific guidance
                  on genetic diversity conservation
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Contact Our Experts
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
