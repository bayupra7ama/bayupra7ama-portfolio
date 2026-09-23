import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><div><span>404</span><h1>This page wandered off.</h1><Link href="/">Return home →</Link></div></main>;
}
