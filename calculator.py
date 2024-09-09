import streamlit as st

def main():
    st.title("Calculator")

    # Input numbers
    num1 = st.number_input("Enter the first number", format="%f")
    num2 = st.number_input("Enter the second number", format="%f")

    # Dropdown menu for operation selection
    operation = st.selectbox("Choose the operation", ("Addition", "Subtraction", "Multiplication", "Division"))

    # Perform the calculation
    if operation == "Addition":
        result = num1 + num2
        st.success(f"The result is: {result}")

    elif operation == "Subtraction":
        result = num1 - num2
        st.success(f"The result is: {result}")

    elif operation == "Multiplication":
        result = num1 * num2
        st.success(f"The result is: {result}")

    elif operation == "Division":
        if num2 != 0:
            result = num1 / num2
            st.success(f"The result is: {result}")
        else:
            st.error("Division by zero is not allowed")

if __name__ == "__main__":
    main()
