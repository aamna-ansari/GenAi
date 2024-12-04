import streamlit as st
import pandas as pd
import numpy as np

st.title('WelCome to My Page')
x = st.slider("Select a value")
st.write(x, "squared is", x * x)

st.button("Say hello")

prompt = st.chat_input("Say something")
if prompt:
    st.write(f" {prompt}")


chart_data = pd.DataFrame(np.random.randn(20, 3), columns=["a", "b", "c"])

st.bar_chart(chart_data)