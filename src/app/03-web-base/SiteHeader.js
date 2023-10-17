import React, { Suspense } from "react";
import Link from "next/link";

import { getNavLinks } from "@/helpers/web-base-helpers";

function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="" className="logo">
        WebBase
      </Link>

      <Suspense fallback={<>nothing</>}>
        <NavigationLinks />
      </Suspense>
    </header>
  );
}

async function NavigationLinks() {
  let navLinks = await getNavLinks();

  navLinks = navLinks.slice(0, 4);

  return (
    <nav>
      <ol className="header-nav-links">
        {navLinks.map(({ slug, label, href, type }) => (
          <li key={slug}>
            <Link href={href} className={`header-nav-link ${type}`}>
              {label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default SiteHeader;
