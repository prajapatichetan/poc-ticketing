export default function TicketCounter({ tickets }) {
  const openCount = tickets.filter(
    (ticket) => ticket.status !== "closed"
  ).length;
  return <div>You have {openCount} open tickets</div>;
}

/**
 * When I start implementation for Ticket counter as given.
 * I rectify there is two issue.
 * 1. We are not passing ticket list to the TicketCounter component , So I pass props
 * 2. We did not have status key in out ticket creating, so I added it in static status open while creating ticket.
 *
 * As I did that, Then user did not have any option to make it close. So in the list I added that so user can close ticket as well.
 */
