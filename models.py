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
        return channels
        # conn.close()

    def addChannel(newChannelName, newChannelDescription):
        cur = conn.cursor()
        sql = "insert into channels (name, abstract) values (%s, %s);"
        cur.execute(sql, (newChannelName, newChannelDescription))
        conn.commit()

    def getMessageAll():
        cur = conn.cursor()
        sql = "select * from messages;"
        cur.execute(sql)
        messages = cur.fetchall()

        cur.close()
        conn.close()
        return messages