/**
 * Server Components SIMULATING fetch requests to
 * an "external API" (in this case, our Node.js server)
*/

export async function getEvent(id) {
  try {
    const response = await fetch(`http://localhost:3001/events/${id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    // throw new Error('Error while fetching events...');

    if (!response.ok) {
      throw new Error('Error while fetching the event...');
    } else {
      const res = await response.json();
      return res.event;
    }
  } catch (e) {
    // throw new Error('Error while fetching the event');
  }
}

export async function getEvents() {
  // await new Promise(resolve => setTimeout(resolve, 2000));

  try {
    const response = await fetch('http://localhost:3001/events/',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    // throw new Error('Error while fetching events...');

    if (!response.ok) {
      throw new Error('Error while fetching events...');
    } else {
      const rest = await response.json();
      return rest.data;
    }
  } catch (e) {
    throw new Error('Error while fetching events');
  }
}