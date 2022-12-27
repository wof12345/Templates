from fpdf import FPDF


class PDF(FPDF):
    def __init__(self):
        super().__init__()

    def header(self):
        self.set_font('Arial', '', 12)
        self.image('image.png', x=14, y=10, w=180)


pdf = PDF()  # Instance of custom class
pdf.add_page()
pdf.set_font('Arial', '', 12)
pdf.cell(w=0, h=255, txt="Body", border=1, ln=1, align='C')
pdf.text(50, 20, 'mina')

pdf.output(f'./report.pdf', 'F')
