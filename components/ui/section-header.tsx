interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeader({ badge, title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={`flex flex-col space-y-4 ${centered ? "items-center justify-center text-center" : ""} mb-12`}>
      <div className="space-y-2">
        {badge && <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">{badge}</div>}
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
        {subtitle && (
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
