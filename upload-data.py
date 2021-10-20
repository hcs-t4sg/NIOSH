import pandas as pd
df = pd.read_csv('testdata.csv')
print(df)
df.columns = [c.lower() for c in df.columns] #postgres doesn't like capitals or spaces

from sqlalchemy import create_engine
engine = create_engine('postgres://ipdbspflsxgrdn:5a342d0cdfc7daac17ff2f198d18e04c7136ffd87f6dc33b13944261b9fe5666@ec2-18-215-96-54.compute-1.amazonaws.com:5432/d757nt4i59cm0a')

df.to_sql("observations", engine, if_exists = "append", index=False)