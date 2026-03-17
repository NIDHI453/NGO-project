import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Handshake, Users, ArrowRight, CheckCircle, Globe, Leaf, BookOpen, Mail, Phone, MapPin } from "lucide-react";
import heroCommunity from "@/assets/hero-community.jpg";
import donateHands from "@/assets/donate-hands.jpg";
import volunteerTeam from "@/assets/volunteer-team.jpg";
import partnerHandshake from "@/assets/partner-handshake.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const impactStats = [
  { label: "Lives Impacted", value: "50K+", icon: Globe },
  { label: "Active Volunteers", value: "2,300", icon: Users },
  { label: "Partner Orgs", value: "120+", icon: Handshake },
  { label: "Projects Funded", value: "340", icon: Leaf },
];

const donationTiers = [
  { amount: 25, label: "Supporter", description: "Provides school supplies for 5 children", color: "bg-primary" },
  { amount: 50, label: "Champion", description: "Funds clean water for a family for 3 months", color: "bg-accent" },
  { amount: 100, label: "Hero", description: "Sponsors a child's education for one semester", color: "bg-secondary" },
  { amount: 250, label: "Visionary", description: "Builds a community garden that feeds 20 families", color: "bg-primary" },
];

const volunteerRoles = [
  { title: "Field Volunteer", description: "Work directly with communities on the ground", commitment: "10-20 hrs/week", icon: MapPin },
  { title: "Educator", description: "Teach skills and mentor youth in our programs", commitment: "5-10 hrs/week", icon: BookOpen },
  { title: "Event Coordinator", description: "Plan fundraisers and awareness campaigns", commitment: "Flexible", icon: Users },
  { title: "Digital Ambassador", description: "Spread our mission through social media & content", commitment: "3-5 hrs/week", icon: Globe },
];

const partnerBenefits = [
  "Co-branded impact reports & PR opportunities",
  "Employee volunteer program integration",
  "Tax-deductible contributions",
  "Quarterly strategy sessions with our leadership",
  "VIP invitations to all events & galas",
  "Custom CSR dashboard with real-time metrics",
];

const Index = () => {
  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [activeTab, setActiveTab] = useState("donate");
  const [formData, setFormData] = useState({ name: "", email: "", message: "", org: "" });
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const handleDonate = () => {
    const amount = selectedTier !== null ? donationTiers[selectedTier].amount : customAmount;
    if (!amount) {
      toast.error("Please select or enter a donation amount");
      return;
    }
    toast.success(`Thank you for your generous donation of $${amount}! 💚`);
    setSelectedTier(null);
    setCustomAmount("");
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error("Please fill in your name and email");
      return;
    }
    toast.success("Application submitted! We'll be in touch within 48 hours 🙌");
    setFormData({ name: "", email: "", message: "", org: "" });
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.org) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Partnership inquiry received! Our team will contact you shortly 🤝");
    setFormData({ name: "", email: "", message: "", org: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0">
          <img src={heroCommunity} alt="Community volunteers planting trees together" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-accent/30" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="inline-block mb-6"
          >
            <Leaf className="w-16 h-16 text-primary" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-4">
            Get <span className="text-primary">Involved</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Every action counts. Whether you donate, volunteer, or partner with us — you're creating lasting change for communities worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["donate", "volunteer", "partner"].map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "outline"}
                size="lg"
                onClick={() => setActiveTab(tab)}
                className="capitalize text-base"
              >
                {tab === "donate" && <Heart className="w-4 h-4 mr-1" />}
                {tab === "volunteer" && <Users className="w-4 h-4 mr-1" />}
                {tab === "partner" && <Handshake className="w-4 h-4 mr-1" />}
                {tab}
              </Button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {impactStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              onHoverStart={() => setHoveredStat(i)}
              onHoverEnd={() => setHoveredStat(null)}
              className="relative"
            >
              <Card className="text-center p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-primary/20">
                <motion.div animate={{ scale: hoveredStat === i ? 1.2 : 1 }} transition={{ type: "spring" }}>
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                </motion.div>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="donate" className="gap-2"><Heart className="w-4 h-4" /> Donate</TabsTrigger>
              <TabsTrigger value="volunteer" className="gap-2"><Users className="w-4 h-4" /> Volunteer</TabsTrigger>
              <TabsTrigger value="partner" className="gap-2"><Handshake className="w-4 h-4" /> Partner</TabsTrigger>
            </TabsList>

            <AnimatePresence mode="wait">
              {/* DONATE TAB */}
              <TabsContent value="donate" key="donate">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }}>
                  <div className="relative rounded-2xl overflow-hidden mb-8 h-48 md:h-64">
                    <img src={donateHands} alt="Hands nurturing a growing seedling" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                    <div className="absolute bottom-4 left-6">
                      <h2 className="text-3xl font-bold text-foreground">Make a Donation</h2>
                      <p className="text-muted-foreground">Every dollar goes directly to our programs.</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {donationTiers.map((tier, i) => (
                      <motion.div key={tier.label} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                        <Card
                          onClick={() => { setSelectedTier(i); setCustomAmount(""); }}
                          className={`cursor-pointer transition-all duration-300 h-full ${
                            selectedTier === i
                              ? "ring-2 ring-primary shadow-lg border-primary"
                              : "hover:shadow-md border-border"
                          }`}
                        >
                          <CardHeader className="pb-2">
                            <div className={`w-10 h-10 rounded-full ${tier.color} flex items-center justify-center mb-2`}>
                              <Heart className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <CardTitle className="text-2xl">${tier.amount}</CardTitle>
                            <CardDescription className="font-semibold text-foreground">{tier.label}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">{tier.description}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end max-w-md">
                    <div className="flex-1 w-full">
                      <label className="text-sm font-medium text-foreground mb-2 block">Custom Amount</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">$</span>
                        <Input
                          type="number"
                          placeholder="Enter amount"
                          value={customAmount}
                          onChange={(e) => { setCustomAmount(e.target.value); setSelectedTier(null); }}
                          className="pl-7"
                        />
                      </div>
                    </div>
                    <Button size="lg" onClick={handleDonate} className="w-full sm:w-auto gap-2">
                      Donate Now <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              </TabsContent>

              {/* VOLUNTEER TAB */}
              <TabsContent value="volunteer" key="volunteer">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }}>
                  <div className="relative rounded-2xl overflow-hidden mb-8 h-48 md:h-64">
                    <img src={volunteerTeam} alt="Volunteer team working together" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                    <div className="absolute bottom-4 left-6">
                      <h2 className="text-3xl font-bold text-foreground">Volunteer With Us</h2>
                      <p className="text-muted-foreground">Join our global team of changemakers.</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-10">
                    {volunteerRoles.map((role, i) => (
                      <motion.div key={role.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                        <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-primary/20">
                          <CardHeader>
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                <role.icon className="w-5 h-5 text-primary" />
                              </div>
                              <div>
                                <CardTitle className="text-lg">{role.title}</CardTitle>
                                <span className="text-xs text-muted-foreground">{role.commitment}</span>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">{role.description}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  <Card className="max-w-lg">
                    <CardHeader>
                      <CardTitle>Apply to Volunteer</CardTitle>
                      <CardDescription>Tell us a bit about yourself and we'll match you with the right role.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                        <Input placeholder="Your Name *" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                        <Input type="email" placeholder="Email Address *" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                        <Textarea placeholder="Why do you want to volunteer? (optional)" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                        <Button type="submit" className="w-full gap-2">Submit Application <ArrowRight className="w-4 h-4" /></Button>
                      </form>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              {/* PARTNER TAB */}
              <TabsContent value="partner" key="partner">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }}>
                  <div className="relative rounded-2xl overflow-hidden mb-8 h-48 md:h-64">
                    <img src={partnerHandshake} alt="Partnership handshake" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                    <div className="absolute bottom-4 left-6">
                      <h2 className="text-3xl font-bold text-foreground">Become a Partner</h2>
                      <p className="text-muted-foreground">Together, we amplify impact.</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Partnership Benefits</h3>
                      <ul className="space-y-3">
                        {partnerBenefits.map((benefit, i) => (
                          <motion.li
                            key={benefit}
                            initial={{ opacity: 0, x: -15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.08 }}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <div className="mt-8 p-4 rounded-lg bg-primary/5 border border-primary/20">
                        <p className="text-sm text-muted-foreground">
                          <strong className="text-foreground">120+ organizations</strong> have already partnered with us. Join them in creating a sustainable future.
                        </p>
                      </div>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Partnership Inquiry</CardTitle>
                        <CardDescription>Fill out the form and our partnerships team will reach out.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <form onSubmit={handlePartnerSubmit} className="space-y-4">
                          <Input placeholder="Contact Name *" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                          <Input placeholder="Organization Name *" value={formData.org} onChange={(e) => setFormData({ ...formData, org: e.target.value })} />
                          <Input type="email" placeholder="Email Address *" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                          <Textarea placeholder="How would you like to collaborate? (optional)" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                          <Button type="submit" className="w-full gap-2">Send Inquiry <ArrowRight className="w-4 h-4" /></Button>
                        </form>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </TabsContent>
            </AnimatePresence>
          </Tabs>
        </div>
      </section>

      {/* Contact Strip */}
      <section className="py-12 px-4 border-t border-border">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
          <a href="mailto:hello@greenearth.org" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-4 h-4" /> hello@greenearth.org
          </a>
          <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="w-4 h-4" /> +1 (234) 567-890
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> 123 Impact Avenue, New York
          </span>
        </div>
      </section>
    </div>
  );
};

export default Index;
