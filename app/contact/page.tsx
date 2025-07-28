import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Check,
  Heart,
  Shield,
  Crown,
} from "lucide-react";
import images from "@/data/images.json";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import content from "@/data/content.json";

const supportTiers = [
  {
    name: "Friend of Diversity",
    price: "$25.00",
    icon: Heart,
    color: "bg-green-100 text-green-600",
    features: [
      "Monthly newsletter updates",
      "Recognition on our website",
      "Access to exclusive resources",
    ],
    recommended: false,
  },
  {
    name: "Champion of Diversity",
    price: "$50.00",
    icon: Shield,
    color: "bg-blue-100 text-blue-600",
    features: [
      "All features from Friend of Diversity",
      "Personalized thank-you message",
      "Invitation to special events",
    ],
    recommended: true,
  },
  {
    name: "Guardian of Diversity",
    price: "$100.00",
    icon: Crown,
    color: "bg-purple-100 text-purple-600",
    features: [
      "All features from Champion of Diversity",
      "Quarterly impact report",
      "Recognition in our annual publication",
    ],
    recommended: false,
  },
];

const socialPlatforms = [
  { name: "Facebook", icon: Facebook, url: "#", color: "hover:text-blue-600" },
  { name: "Twitter", icon: Twitter, url: "#", color: "hover:text-blue-400" },
  {
    name: "Instagram",
    icon: Instagram,
    url: "#",
    color: "hover:text-pink-600",
  },
  { name: "LinkedIn", icon: Linkedin, url: "#", color: "hover:text-blue-700" },
  { name: "YouTube", icon: Youtube, url: "#", color: "hover:text-red-600" },
];

export default function ContactPage() {
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
              <span className="text-muted-foreground">Contact</span>
            </div>
          </div>
        </section>

        {/* Hero Banner */}
        <section className="w-full h-64 md:h-80 lg:h-96 relative bg-gradient-to-r from-green-800 via-green-700 to-green-600 lg:px-8 xl:px-12">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
            style={{ backgroundImage: `url(${images.contact.banner})` }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Connect with Us
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
                Get in touch to learn more about our work or explore ways to
                support genetic diversity conservation
              </p>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="w-full py-12 md:py-24 bg-green-50">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl lg:px-8 xl:px-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                  Follow Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Stay Connected
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Follow us on our social media platforms to stay updated on our
                  initiatives and engage with our community
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-6">
              {socialPlatforms.map((platform) => (
                <Link
                  key={platform.name}
                  href={platform.url}
                  className={`flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md transition-colors ${platform.color}`}
                >
                  <platform.icon className="w-8 h-8" />
                  <span className="sr-only">{platform.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Support Tiers Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl lg:px-8 xl:px-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                  Support Our Mission
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Make a Difference
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Your contributions play a vital role in helping us preserve
                  genetic diversity. Explore our support tiers below.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto lg:max-w-7xl xl:gap-12">
              {supportTiers.map((tier, index) => (
                <Card
                  key={index}
                  className={`relative ${
                    tier.recommended ? "border-green-500 shadow-lg" : ""
                  }`}
                >
                  {tier.recommended && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600">
                      Recommended
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <div
                      className={`mx-auto mb-4 h-16 w-16 rounded-full ${tier.color} flex items-center justify-center`}
                    >
                      <tier.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl">{tier.name}</CardTitle>
                    <CardDescription className="text-3xl font-bold text-green-600">
                      {tier.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {tier.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-2"
                        >
                          <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      SELECT
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="w-full py-12 md:py-24 bg-green-50">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl lg:px-8 xl:px-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                  Get in Touch
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Contact Us
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We welcome your inquiries and feedback. Reach out to us
                  through the contact details below.
                </p>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto lg:max-w-7xl xl:gap-12">
              {/* Contact Form */}
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as
                    possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid gap-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your message"
                      />
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Submit
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Contact Information
                  </CardTitle>
                  <CardDescription>
                    Get in touch with us through any of the following methods
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-green-100 p-2 text-green-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Address</h4>
                      <p className="text-muted-foreground">
                        P.O. Box 1948 Kigali
                        <br />
                        Kigali KK89
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-green-100 p-2 text-green-600">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Office Hours</h4>
                      <p className="text-muted-foreground">
                        Mon-Fri 10am-5pm
                        <br />
                        Sat 1pm-5pm
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-green-100 p-2 text-green-600">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-muted-foreground">+2500782555390</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-green-100 p-2 text-green-600">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-muted-foreground">
                        hrichard86@yahoo.fr
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
