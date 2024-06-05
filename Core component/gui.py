# gui.py

import tkinter as tk
from core import Model, Controller

class GUI:
    def __init__(self, root, controller):
        self.root = root
        self.controller = controller
        self.root.title("Quiz Application")

        self.question_frame = tk.Frame(root)
        self.question_frame.pack(pady=10)

        self.question_label = tk.Label(self.question_frame, text="", font=("Arial", 14))
        self.question_label.pack()

        self.options_frame = tk.Frame(root)
        self.options_frame.pack(pady=10)

        self.option_var = tk.StringVar()

        self.option_buttons = []
        for _ in range(4):
            rb = tk.Radiobutton(self.options_frame, text="", variable=self.option_var, value="", font=("Arial", 12), indicatoron=0, width=20, padx=20, pady=10)
            rb.pack(anchor=tk.W, pady=5)
            rb.bind('<Button-1>', self.on_option_selected)
            self.option_buttons.append(rb)

        self.next_button = tk.Button(root, text="Next Question", command=self.next_question, font=("Arial", 12), width=15)
        self.next_button.pack(pady=20)

        self.score_label = tk.Label(root, text="", font=("Arial", 14))
        self.score_label.pack()

        self.load_question()

    def load_question(self):
        if self.controller.has_more_questions():
            question_data = self.controller.get_current_question()
            self.question_label.config(text=question_data["question"])

            self.option_var.set(None)
            for i, option in enumerate(question_data["options"]):
                self.option_buttons[i].config(text=option, value=option, bg="white")
        else:
            self.display_score()

    def next_question(self):
        selected_option = self.option_var.get()
        if selected_option:
            self.controller.check_answer(selected_option)
            self.controller.next_question()
            self.load_question()

    def on_option_selected(self, event):
        selected_button = event.widget
        for button in self.option_buttons:
            button.config(bg="white")
        selected_button.config(bg="lightblue")

    def display_score(self):
        score = self.controller.get_score()
        total_questions = len(self.controller.model.questions)
        self.question_label.config(text=f"Your score: {score}/{total_questions}")
        for button in self.option_buttons:
            button.pack_forget()
        self.next_button.pack_forget()

if __name__ == "__main__":
    root = tk.Tk()
    model = Model()
    controller = Controller(model)
    gui = GUI(root, controller)
    root.mainloop()
