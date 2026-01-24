interface TabItem {
  label: string;
  href: string;
  active?: boolean;
  disabled?: boolean;
}

export default function StyledTabs({ items }: { items: TabItem[] }) {
  return (
    <div className="text-sm font-medium text-center text-body border-b border-default">
      <ul className="flex flex-wrap -mb-px">
        {items.map((item, idx) => (
          <li key={idx} className="me-2">
            <a
              href={item.href}
              aria-current={item.active ? "page" : undefined}
              className={[
                "inline-block p-4 border-b border-transparent rounded-t-base",
                item.active
                  ? "text-fg-brand border-brand"
                  : "hover:text-fg-brand hover:border-brand",
                item.disabled
                  ? "text-fg-disabled cursor-not-allowed dark:text-body"
                  : "",
              ].join(" ")}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
