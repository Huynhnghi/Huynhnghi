
import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function DemoReponsive() {
    return (
        <div className="container">
            < Header />
            < Content />
            < Footer />
        </div>
    );
}

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary navbar">
            <Container fluid>
                <Navbar.Brand href="#">ICO WEB</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#">Trang chủ</Nav.Link>
                        <Nav.Link href="#">Liên hệ</Nav.Link>
                        <NavDropdown title="Đăng ký/ Đăng nhập" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#"></NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Đăng ký
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">
                                Đăng nhập
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

function Content() {
    return (
        <div className="mt-4">
            <h2 className="text-center">Nội dung chính</h2>
            <p className="text-center">
                Chào mừng bạn đến với ICO WEB, nơi bạn có thể khám phá nhiều thông tin hữu ích và dịch vụ chất lượng cao. Hãy xem qua một số liên kết dưới đây để tìm hiểu thêm.
            </p>
            <div className="row">
                <div className="col-12 col-md-4">
                    <h3>Giới thiệu</h3>
                    <ul>
                        <li><a href="#">Giới thiệu về chúng tôi</a></li>
                        <li><a href="#">Đội ngũ của chúng tôi</a></li>
                        <li><a href="#">Lịch sử phát triển</a></li>
                    </ul>
                </div>
                <div className="col-12 col-md-4">
                    <h3>Dịch vụ</h3>
                    <ul>
                        <li><a href="#">Các dịch vụ của chúng tôi</a></li>
                        <li><a href="#">Bảng giá</a></li>
                        <li><a href="support">Hỗ trợ khách hàng</a></li>
                    </ul>
                </div>
                <div className="col-12 col-md-4">
                    <h3>Liên hệ</h3>
                    <ul>
                        <li><a href="#">Liên hệ chúng tôi</a></li>
                        <li><a href="#">Địa điểm</a></li>
                        <li><a href="#">Cơ hội nghề nghiệp</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-4">
                <h3 className="text-center">Thông tin thêm</h3>
                <p className="text-center">
                    Để biết thêm chi tiết về các chương trình khuyến mãi và ưu đãi đặc biệt, vui lòng liên hệ với đội ngũ chăm sóc khách hàng của chúng tôi. Chúng tôi luôn sẵn sàng hỗ trợ bạn.
                </p>
                <div className="text-center">
                    <a href="#" className="btn btn-primary mx-2">Khuyến mãi</a>
                    <a href="#" className="btn btn-secondary mx-2">Nhận bản tin</a>
                </div>
            </div>
        </div>
    );
}


function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-4 mt-4">
            <div className="container">
                <p>&copy; 2024 ICO WEB. All Rights Reserved.</p>
                <p>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                        Facebook
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                        Twitter
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                        Instagram
                    </a>
                </p>
                <p>
                    Địa chỉ: 31 Phạm Ngọc Thảo, Quận Tân Phú, TP. Hồ Chí Minh <br />
                    Điện thoại: 0385006809
                </p>
            </div>
        </footer>
    );
}


export default DemoReponsive;
