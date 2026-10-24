"use server";

/**
 * Server Acitons SIMULATING fetch requests to
 * an "external API" (in this case, our Node.js server)
*/

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createEventAction(formData) {
  // await new Promise(resolve => setTimeout(resolve, 2000));

  const event = {
    title: formData.get('title'),
    desc: formData.get('desc'),
    tag: formData.get('tag'),
    priority: formData.get('priority'),
    attachments: [
      0,
      1,
      2,
      3,
      4,
      5,
      6
    ],
    comments: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15
    ]
  };

  const column = formData.get('column');

  if (
    !event.title?.trim() ||
    !event.desc?.trim() ||
    !event.tag?.trim() ||
    !event.priority?.trim()
  ) {
    return {
      message: 'Invalid form data',
      error: true
    };
  }

  const response = await fetch('http://localhost:3001/events/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ event, column })
  });

  if (!response.ok) {
    return {
      message: 'Please, try again in a few minutes',
      error: true
    };
  } else {
    /** If we wanted to return the id: 
    const event = await response.json();
    revalidatePath('/events', 'page');
    return event; */

    revalidatePath('/events', 'page');
    
    return {
      message: 'Event created successfully!',
      error: false
    };
  }
}

export async function updateEventAction(formData) {
  const event = {
    id: formData.get('id'),
    title: formData.get('title'),
    desc: formData.get('desc'),
    tag: formData.get('tag'),
    priority: formData.get('priority'),
  }

  if (
    !event.id?.trim() ||
    !event.title?.trim() ||
    !event.desc?.trim() ||
    !event.tag?.trim() ||
    !event.priority?.trim()
  ) {
    return {
      message: 'Invalid form data',
      error: true,
    };
  }

  const response = await fetch(`http://localhost:3001/events/${event.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ event })
  });

  if (!response.ok) {
    throw new Error('Something went wrong!');
  } else {
    revalidatePath('/events', 'layout');
    redirect('/events');
  }
}

export async function deleteEventAction(formData) {
  // await new Promise(resolve => setTimeout(resolve, 2000));

  const id = formData.get('id');

  if (!id?.trim()) {
    throw new Error('Missing event id...');
  }

  const response = await fetch(`http://localhost:3001/events/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    return {
      message: 'Please, try again in a few minutes',
      error: true
    }
  } else {
    revalidatePath('/events', 'page');
    redirect('/events');
  }
}