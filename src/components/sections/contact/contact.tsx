import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactSection() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-3xl px-8 lg:px-0">
        <h1 className="text-center text-4xl font-semibold lg:text-5xl">
          Nous contacter
        </h1>

        <Card className="mx-auto mt-12 max-w-lg p-8 shadow-md sm:p-16">
          <form
            action=""
            className="**:[&>label]:block mt-2 space-y-6 *:space-y-3"
          >
            <div>
              <Label htmlFor="name">Nom</Label>
              <Input type="text" id="firstname" required />
            </div>
            <div>
              <Label htmlFor="name">Prénom</Label>
              <Input type="text" id="lastname" required />
            </div>
            <div>
              <Label htmlFor="phone">Numéro de téléphone</Label>
              <Input type="tel" id="phone" required />
            </div>

            <div>
              <Label htmlFor="email">Adresse mail</Label>
              <Input type="email" id="email" required />
            </div>

            <div>
              <Label htmlFor="article">Article recherché</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Accessoire</SelectItem>
                  <SelectItem value="2">Composant</SelectItem>
                  <SelectItem value="3">Autre</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="msg">Message</Label>
              <Textarea id="msg" rows={3} />
            </div>

            <Button className="w-full">Envoyer</Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
