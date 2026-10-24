import { redirect } from "next/navigation";

export const metadata = {
  title: 'Events',
  Description: 'Events homepage',
};

export default function HomePage() {
  redirect('/events');
}