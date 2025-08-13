from flask import Flask, jsonify
from flask_cors import CORS  # 跨域
from mysqlhelper import MySQLHelper

app = Flask(__name__)
CORS(app)  # 跨域

@app.route('/')
def home():
    return "Welcome to the Flask App!"

@app.route('/java', methods=['GET'])
def get_data():
    db_config = {
        'host': 'localhost',
        'user': 'root',
        'password': 'root',  # 替换为你的密码
        'database': 'crawler_db', # 替换为你的数据库
        'port': 3306
    }
    db = MySQLHelper(**db_config)

    try:
        data = db.execute_query("SELECT month,monthly_sales FROM sales")  # 替换为你的表名
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        db.close()


if __name__ == '__main__':
    app.run(debug=True)