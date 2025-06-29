import html

file_path = "text_to_escape.txt"

def read_file(file_path):
    """
    Reads the content of a file and returns it as a string.

    Args:
        file_path: The path to the file to read.

    Returns:
        The content of the file as a string.
    """
    with open(file_path, 'r', encoding='utf-8') as file:
        print(f"Reading file: {file_path}")
        return file.read()

def convert_angle_brackets(text):
    """
    Converts angle brackets (< and >) in a string to their HTML entities (&lt; and &gt;).

    Args:
        text: The input string.

    Returns:
        The string with angle brackets converted to HTML entities.
    """
    show_text  = text[:100] 
    print(show_text)
    return html.escape(text)

write_file_path = "escaped_output.txt"

def write_file(file_path, content):
    """
    Writes content to a file.

    Args:
        file_path: The path to the file where content will be written.
        content: The content to write to the file.
    """
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(content)

def main():
    """
    Main function to read a file, convert angle brackets, and print the result.
    """
    try:
        content = read_file(file_path)
        escaped_content = convert_angle_brackets(content)
        write_file(write_file_path, escaped_content)
    except FileNotFoundError:
        print(f"File not found: {file_path}")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()
    print(f"Escaped content written to: {write_file_path}")
    print("Done.")
    print("You can now copy the content from the file.")