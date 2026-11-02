import json
import pandas as pd

roster = pd.read_csv('students.csv')
roster = dict(zip(roster.ID, roster.NAME))


with open('student.json', 'w', encoding = 'utf-8') as f:
    json.dump(roster, f, ensure_ascii = False)
