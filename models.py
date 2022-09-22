import pymysql
from util.DB import DB

class dbConnect:
    def createUser(user):
        conn = DB.getConnection()
        cur = conn.cursor()
        sql = "insert into users (uid, user_name, email, password) values (%s, %s, %s, %s);"
        cur.execute(sql, (user.uid, user.name, user.email, user.password))
        conn.commit()
        cur.close()


    def getUserId(email):
        conn = DB.getConnection()
        cur = conn.cursor()
        sql = "SELECT uid FROM users WHERE email=%s;"
        cur.execute(sql, (email))
        id = cur.fetchone()
        cur.close
        return id


    def getUser(email):
        conn = DB.getConnection()
        cur = conn.cursor()
        sql = "SELECT * FROM users WHERE email=%s;"
        cur.execute(sql, (email))
        user = cur.fetchone()
        cur.close
        return user


    def getChannelAll():
        conn = DB.getConnection()
        cur = conn.cursor()
        sql = "select * from channels;"
        cur.execute(sql)
        channels = cur.fetchall()
        cur.close()
        return channels

    def getChannelById(cid):
        conn = DB.getConnection()
        cur = conn.cursor()
        sql = "select * from channels where id=%s;"
        cur.execute(sql, (cid))
        channel = cur.fetchone()
        cur.close()
        return channel

    def getChannelByName(channel_name):
        conn = DB.getConnection()
        cur = conn.cursor()
        sql = "select * from channels where name=%s;"
        cur.execute(sql, (channel_name))
        channel = cur.fetchone()
        cur.close()
        return channel


    def addChannel(uid, newChannelName, newChannelDescription):
        conn = DB.getConnection()
        cur = conn.cursor()
        sql = "insert into channels (uid, name, abstract) values (%s, %s, %s);"
        cur.execute(sql, (uid, newChannelName, newChannelDescription))
        conn.commit()
        cur.close()
    
    #deleteチャンネル関数
    def deleteChannel(cid):
        conn = DB.getConnection()
        cur = conn.cursor()
        sql = "DELETE FROM channels WHERE id=%s;"
        cur.execute(sql, (cid))
        conn.commit()
        cur.close()

    def getMessageAll(cid):
        conn = DB.getConnection()
        cur = conn.cursor()
        sql = "select * from messages where cid=%s;"
        cur.execute(sql, (cid))
        messages = cur.fetchall()
        cur.close()
        return messages


    def createMessage(uid, cid, message):
        conn = DB.getConnection()
        cur = conn.cursor()
        sql = "INSERT INTO messages(uid, cid, message) VALUES(%s, %s, %s)"
        cur.execute(sql, (uid, cid, message))
        conn.commit()
        cur.close()

    
    def deleteMessage(message_id):
        conn = DB.getConnection()
        print(message_id)
        cur = conn.cursor()
        sql = "DELETE FROM messages WHERE id=%s;"
        cur.execute(sql, (message_id))
        conn.commit()
        cur.close()
    