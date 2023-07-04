from flask import Flask, render_template, request, send_from_directory, jsonify
from flask_cors import CORS
import psycopg2
from psycopg2.extras import RealDictCursor
import os

app = Flask(__name__, static_url_path='')
CORS(app)


def connect():
    connection = psycopg2.connect(
        host="localhost",
        dbname="suppliers",
        user="postgres",
        password="123456"
    )

    connection.autocommit = True
    cursor = connection.cursor(cursor_factory=RealDictCursor)

    return connection, cursor


def disconnect(connection):
    connection.commit()
    connection.close()


@app.route('/students', methods=['GET'])
def students():
    connection, cursor = connect()

    cursor.execute("SELECT * FROM STUDENT")

    data = cursor.fetchall()

    disconnect(connection)

    return data


@app.route('/students/register', methods=['POST'])
def register():
    connection, cursor = connect()
    name, nrc, dob, phone_no, contact, details = request.json.values()

    cursor.execute(f"INSERT INTO STUDENT(NAME, NRC, DOB, PHONE_NO, CONTACT) "
                   f"VALUES ('{name}', '{nrc}', '{dob}', '{phone_no}', '{contact}') "
                   f"RETURNING id")

    student_id = str(cursor.fetchone()['id'])

    for detail in details:
        a_year, mark1, mark2, mark3, remark = detail.values()
        cursor.execute(f"INSERT INTO STUDENT_DETAILS(STUDENT_ID, ACADEMIC_YEAR, MARK1, MARK2, MARK3, REMARK) "
                       f"VALUES ('{student_id}', '{a_year}', {mark1}, {mark2}, {mark3}, '{remark}')")

    disconnect(connection)

    return "Success"


@app.route('/students/student/<student_id>', methods=['GET'])
def get_student(student_id):
    connection, cursor = connect()

    cursor.execute(f"SELECT * FROM STUDENT WHERE id = {student_id}")

    data = cursor.fetchall()[0]

    cursor.execute(f"SELECT * FROM STUDENT_DETAILS WHERE student_id = {student_id}")

    data['details'] = cursor.fetchall()

    disconnect(connection)

    return data


# Route for editing, not done
# @app.route('/students/edit/<student_id>', methods=['PATCH'])
# def edit_student():
#     connection, cursor = connect()
#
#     print(request.json)
#
#     return "Success"


app.run(debug=True)
