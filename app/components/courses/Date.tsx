'use client'


const Dates = ({ dates, backgroundColor }: { dates: string[], backgroundColor?: string;}) => {

  return dates.map((date, index) => (
    <div
        key={index}
        className={`${backgroundColor} flex items-center gap-4 p-4 mb-4 border border-border rounded-sm hover:border-primary/30 transition-colors`}
    >
        { dates.length > 1 && <div className="w-2 h-2 rounded-full bg-accent" /> }
        <span className="font-display text-lg text-foreground font-bold">
            {date}
        </span>
    </div>
    ))
};

export default Dates;
