# How It Works

TaskRatchet is the only todo list that makes you do the tasks you add.

## Add a Task

When adding a task, TaskRatchet asks you for three pieces of information:

- **Task:** The definition of the task—what is it you need to do?
- **Deadline:** A deadline, specified as a date and time.
- **Stakes:** The amount of money you'll be charged if you don't complete it in time.

In addition, you can create multiple tasks at the same time—all with the same deadline and stakes—by entering one task per line
in the task field. Each line will be created as its own task.

![FVYKEaUXsAIdwTd](https://user-images.githubusercontent.com/4655422/179230689-1a697e39-5cef-49ad-b854-aa1b463b2516.jpeg)

## Get Reminded

Currently, the only reminder that TaskRatchet has is a daily summary email which includes all your tasks you haven't yet
completed. This email is not sent if you don't currently have any outstanding tasks.

Daily emails are almost certainly not the optimal solution for reminders. If you have opinions regarding how reminders should work,
please send an email to support@taskratchet.com. The more feedback we can get on how people would like reminders to work, the better!

## Complete the Task

If all goes well, you check off the task in your list before the deadline comes, and that's it! You won't be charged
for that task.

## Fail to Complete the Task

If you don't mark the task as complete on time, a series of events are triggered within specific time periods after the task's deadline:

| Window        | Event                                                                                     | Calling Not-Legit                                                                                    |
| ------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **0-6 hrs**   | TaskRatchet sends you a charge notification email.                                        | Reply direclty to the charge email to pause the charge until we can respond.                         |
| **24-30 hrs** | TaskRatchet initiates a charge which will appear in your bank without removing the money. | If you email us in time, we can cancel the charge without any funds being removed from your account. |
| **48-54 hrs** | TaskRatchet removes the money from your bank.                                             | Calling not-legit at this point will result in a refund.                                             |

## Calling a Charge Not Legit

Depending on the situation, you may feel that a particular charge isn't legit. Reasons could be:

- You completed the task on time but didn't manage to mark it as complete in the app on time.
- You included a condition for discarding the task in its description.
- You have some rules defined externally for when a charge should not be considered legitimate.

Even if your reason isn't listed above, go ahead and email us, including the reason you're calling not legit.

The preferred way to call not legit on a charge is to reply directly to
the email telling you you're getting charged. This way the charge is
automatically paused until we can respond to you. Once we've agreed that
your charge should be cancelled, we'll go ahead and cancel the charge,
or, if it's already been finalized, we'll issue you a refund.
