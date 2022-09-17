import pymysql

conn = pymysql.connect(
        host="localhost",
        db="chatapp",
        user="testuser",
        password="testuser",
        charset="utf8",
        cursorclass=pymysql.cursors.DictCursor
        )

class dbConnect:
    def getChannelAll():
        cur = conn.cursor()
        sql = "select * from channels;"
        cur.execute(sql)
        channels = cur.fetchall()

        cur.close()
        conn.close()
        return channels

    def getMessageAll():
        cur = conn.cursor()
        sql = "select * from messages;"
        cur.execute(sql)
        messages = cur.fetchall()

        cur.close()
        conn.close()
        return messages