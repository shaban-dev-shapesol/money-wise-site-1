import { useCountUp } from "@/hooks/use-count-up";

interface CountUpStatProps {
  end: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

const CountUpStat = ({
  end,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 2000,
  className = "",
}: CountUpStatProps) => {
  const { count, ref } = useCountUp({ end, duration, decimals });

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
};

export default CountUpStat;
