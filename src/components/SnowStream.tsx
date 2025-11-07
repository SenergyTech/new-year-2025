import * as React from "react";

/** Цастай фон — дотор нь Hero/Content-ээ байршуул */
export default function SnowStream({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`snow-stream relative ${className}`}>
      {/* Жижиг ширхэгийн давхарга */}
      <div className="snow-stream-tiny" />
      {/* Анивчих оч (сонголттой) */}
      <div className="snow-twinkle" />
      {/* Доторх контент */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
