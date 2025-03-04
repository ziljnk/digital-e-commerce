import {
	Body,
	Column,
	Container,
	Head,
	Hr,
	Html,
	Img,
	Link,
	Preview,
	Row,
	Section,
	Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl =
	process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";

export const EmailOrder = ({ orderDetail, totalAmount }) => (
	<Html>
		<Head />

		<Body style={main}>
			<Preview>Digi Store Receipt</Preview>
			<Container style={container}>
				<Section>
					<Row>
						<Column>
							<Img
								src={`${baseUrl}/static/apple-logo.png`}
								width="42"
								height="42"
								alt="Apple Logo"
							/>
						</Column>

						<Column align="right" style={tableCell}>
							<Text style={heading}>Receipt</Text>
						</Column>
					</Row>
				</Section>
				<Section>
					<Text style={cupomText}>
						Save 3% on all your Apple purchases with Apple Card.
						<sup style={supStyle}>1</sup>{" "}
						<Link href="https://www.apple.com/apple-card">
							Apply and use in minutes
						</Link>
						<sup style={supStyle}>2</sup>
					</Text>
				</Section>

				<Section style={productTitleTable}>
					<Text style={productsTitle}>App Store</Text>
				</Section>
				<Section>
					{orderDetail &&
						orderDetail.map((order, index) => (
							<Row>
								<Column style={{ width: "64px" }}>
									<Img
										src={order.imageUrl}
										width="64"
										height="64"
										alt={order.title}
										style={productIcon}
									/>
								</Column>
								<Column style={{ paddingLeft: "22px" }}>
									<Text style={productTitle}>
										{order.title}
									</Text>
									<Text style={productDescription}>
										{order.category}
									</Text>
									{/* <Text style={productDescription}>
								Renews Aug 20, 2023
							</Text> */}
									<Link
										href={order.fileUrl}
										style={productLink}
										data-saferedirecturl={
											"https://www.google.com/url?q=" +
											order.fileUrl
										}
									>
										Download Content
									</Link>
									{/* <span style={divisor}>|</span>
							<Link
								href="https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/reportAProblem?a=1497977514&amp;cc=us&amp;d=683263808&amp;o=i&amp;p=29065684906671&amp;pli=29092219632071&amp;s=1"
								style={productLink}
								data-saferedirecturl="https://www.google.com/url?q=https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/reportAProblem?a%3D1497977514%26cc%3Dus%26d%3D683263808%26o%3Di%26p%3D29065684906671%26pli%3D29092219632071%26s%3D1&amp;source=gmail&amp;ust=1673963081204000&amp;usg=AOvVaw3y47L06B2LTrL6qsmaW2Hq"
							>
								Report a Problem
							</Link> */}
								</Column>

								<Column
									style={productPriceWrapper}
									align="right"
								>
									<Text style={productPrice}>
										${order.price}
									</Text>
								</Column>
							</Row>
						))}
				</Section>
				<Hr style={productPriceLine} />
				<Section align="right">
					<Row>
						<Column style={tableCell} align="right">
							<Text style={productPriceTotal}>TOTAL</Text>
						</Column>
						<Column style={productPriceVerticalLine} />
						<Column style={productPriceLargeWrapper}>
							<Text style={productPriceLarge}>
								${totalAmount}
							</Text>
						</Column>
					</Row>
				</Section>
				<Hr style={productPriceLineBottom} />
				<Section>
					<Row>
						<Column align="center" style={block}>
							<Img
								src={`${baseUrl}/static/apple-card-icon.png`}
								width="60"
								height="17"
								alt="Apple Card"
							/>
						</Column>
					</Row>
				</Section>
				<Section>
					<Row>
						<Column align="center" style={ctaTitle}>
							<Text style={ctaText}>
								Start Buying & Selling Digital Content on
								GrowSense for free
							</Text>
						</Column>
					</Row>
				</Section>

				<Section>
					<Row>
						<Column align="center" style={footerIcon}>
							<Img
								src={`${baseUrl}/static/apple-logo.png`}
								width="26"
								height="26"
								alt="Apple Card"
							/>
						</Column>
					</Row>
				</Section>
				<Text style={footerLinksWrapper}>
					<Link href="">Account Settings</Link> •{" "}
					<Link href="">Terms of Sale</Link> •{" "}
					<Link href="">Privacy Policy </Link>
				</Text>
				<Text style={footerCopyright}>
					Copyright © 2025 GrowSense Inc. <br />{" "}
					<Link href="">All rights reserved</Link>
				</Text>
			</Container>
		</Body>
	</Html>
);

export default EmailOrder;

const main = {
	fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
	backgroundColor: "#ffffff",
};

const resetText = {
	margin: "0",
	padding: "0",
	lineHeight: 1.4,
};

const container = {
	margin: "0 auto",
	padding: "20px 0 48px",
	width: "660px",
	maxWidth: "100%",
};

const tableCell = { display: "table-cell" };

const heading = {
	fontSize: "32px",
	fontWeight: "300",
	color: "#888888",
};

const cupomText = {
	textAlign: "center",
	margin: "36px 0 40px 0",
	fontSize: "14px",
	fontWeight: "500",
	color: "#111111",
};

const supStyle = {
	fontWeight: "300",
};

const informationTable = {
	borderCollapse: "collapse",
	borderSpacing: "0px",
	color: "rgb(51,51,51)",
	backgroundColor: "rgb(250,250,250)",
	borderRadius: "3px",
	fontSize: "12px",
};

const informationTableRow = {
	height: "46px",
};

const informationTableColumn = {
	paddingLeft: "20px",
	borderStyle: "solid",
	borderColor: "white",
	borderWidth: "0px 1px 1px 0px",
	height: "44px",
};

const informationTableLabel = {
	...resetText,
	color: "rgb(102,102,102)",
	fontSize: "10px",
};

const informationTableValue = {
	fontSize: "12px",
	margin: "0",
	padding: "0",
	lineHeight: 1.4,
};

const productTitleTable = {
	...informationTable,
	margin: "30px 0 15px 0",
	height: "24px",
};

const productsTitle = {
	background: "#fafafa",
	paddingLeft: "10px",
	fontSize: "14px",
	fontWeight: "500",
	margin: "0",
};

const productIcon = {
	margin: "0 0 0 20px",
	borderRadius: "14px",
	border: "1px solid rgba(128,128,128,0.2)",
};

const productTitle = { fontSize: "12px", fontWeight: "600", ...resetText };

const productDescription = {
	fontSize: "12px",
	color: "rgb(102,102,102)",
	...resetText,
};

const productLink = {
	fontSize: "12px",
	color: "rgb(0,112,201)",
	textDecoration: "none",
};

const divisor = {
	marginLeft: "4px",
	marginRight: "4px",
	color: "rgb(51,51,51)",
	fontWeight: 200,
};

const productPriceTotal = {
	margin: "0",
	color: "rgb(102,102,102)",
	fontSize: "10px",
	fontWeight: "600",
	padding: "0px 30px 0px 0px",
	textAlign: "right",
};

const productPrice = {
	fontSize: "12px",
	fontWeight: "600",
	margin: "0",
};

const productPriceLarge = {
	margin: "0px 20px 0px 0px",
	fontSize: "16px",
	fontWeight: "600",
	whiteSpace: "nowrap",
	textAlign: "right",
};

const productPriceWrapper = {
	display: "table-cell",
	padding: "0px 20px 0px 0px",
	width: "100px",
	verticalAlign: "top",
};

const productPriceLine = { margin: "30px 0 0 0" };

const productPriceVerticalLine = {
	height: "48px",
	borderLeft: "1px solid",
	borderColor: "rgb(238,238,238)",
};

const productPriceLargeWrapper = { display: "table-cell", width: "90px" };

const productPriceLineBottom = { margin: "0 0 75px 0" };

const block = { display: "block" };

const ctaTitle = {
	display: "block",
	margin: "15px 0 0 0",
};

const ctaText = { fontSize: "24px", fontWeight: "500" };

const walletWrapper = { display: "table-cell", margin: "10px 0 0 0" };

const walletLink = { color: "rgb(0,126,255)", textDecoration: "none" };

const walletImage = {
	display: "inherit",
	paddingRight: "8px",
	verticalAlign: "middle",
};

const walletBottomLine = { margin: "65px 0 20px 0" };

const footerText = {
	fontSize: "12px",
	color: "rgb(102,102,102)",
	margin: "0",
	lineHeight: "auto",
	marginBottom: "16px",
};

const footerTextCenter = {
	fontSize: "12px",
	color: "rgb(102,102,102)",
	margin: "20px 0",
	lineHeight: "auto",
	textAlign: "center",
};

const footerLink = { color: "rgb(0,115,255)" };

const footerIcon = { display: "block", margin: "40px 0 0 0" };

const footerLinksWrapper = {
	margin: "8px 0 0 0",
	textAlign: "center",
	fontSize: "12px",
	color: "rgb(102,102,102)",
};

const footerCopyright = {
	margin: "25px 0 0 0",
	textAlign: "center",
	fontSize: "12px",
	color: "rgb(102,102,102)",
};

const walletLinkText = {
	fontSize: "14px",
	fontWeight: "400",
	textDecoration: "none",
};
