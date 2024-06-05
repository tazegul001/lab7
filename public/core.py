# core.py

class Model:
    def __init__(self):
        self.questions = [
            {"question": "What is the capital of France?", "options": ["Paris", "London", "Rome", "Berlin"], "answer": "Paris"},
            {"question": "What is 2 + 2?", "options": ["3", "4", "5", "6"], "answer": "4"},
            {"question": "What is the color of the sky?", "options": ["Blue", "Green", "Red", "Yellow"], "answer": "Blue"},
        ]
        self.current_question_index = 0
        self.score = 0

    def get_current_question(self):
        return self.questions[self.current_question_index]

    def check_answer(self, selected_option):
        correct_answer = self.get_current_question()["answer"]
        if selected_option == correct_answer:
            self.score += 1

    def next_question(self):
        self.current_question_index += 1

    def has_more_questions(self):
        return self.current_question_index < len(self.questions)

    def get_score(self):
        return self.score

class Controller:
    def __init__(self, model):
        self.model = model

    def get_current_question(self):
        return self.model.get_current_question()

    def check_answer(self, selected_option):
        self.model.check_answer(selected_option)

    def next_question(self):
        self.model.next_question()

    def has_more_questions(self):
        return self.model.has_more_questions()

    def get_score(self):
        return self.model.get_score()
