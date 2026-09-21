import { Badge } from "@/components/ui/Badge";
import { TRACKING_STATUS_LABELS, TRANSPORT_MODE_LABELS } from "@/lib/constants/brand";
import type { TrackingStatus, TransportMode } from "@/types";

const statusVariant: Record<
  TrackingStatus,
  "default" | "success" | "warning" | "error" | "info" | "neutral"
> = {
  order_created: "neutral",
  received_china: "info",
  quality_check: "info",
  prepared: "default",
  shipped_china: "default",
  in_transit: "warning",
  arrived_cameroon: "info",
  customs: "warning",
  available: "success",
  delivered: "success",
};

export function TrackingStatusBadge({ status }: { status: TrackingStatus }) {
  return (
    <Badge variant={statusVariant[status]}>
      {TRACKING_STATUS_LABELS[status]}
    </Badge>
  );
}

export function TransportModeLabel({ mode }: { mode: TransportMode }) {
  return <span>{TRANSPORT_MODE_LABELS[mode]}</span>;
}
