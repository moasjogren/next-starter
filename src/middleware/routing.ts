import { useRouter } from "next/navigation";

interface RedirectProps {
  url: string;
}

const router = useRouter();

export default function Redirect({ url }: RedirectProps) {
  router.push(url);
}
