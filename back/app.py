from flask import Flask, jsonify, request
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

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')


    db_config = {
        'host': 'localhost',
        'user': 'root',
        'password': 'root',  # 替换为你的密码
        'database': 'crawler_db', # 替换为你的数据库
        'port': 3306
    }
    db = MySQLHelper(**db_config)

    try:
        # 这里可以添加用户验证逻辑
        user = db.execute_query("SELECT * FROM user WHERE username = %s", (username,))
        if not user:
            return jsonify({'message': 'User not found!'}), 404
        
        user = user[0]  # 获取查询结果的第一条记录
        if user['password'] == password:  # 简单的密码验证
            return jsonify({'message': 'Login successful!'}), 200
        else:
            return jsonify({'message': 'Invalid password!'}), 401   
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        db.close()



if __name__ == '__main__':
    app.run(debug=True)