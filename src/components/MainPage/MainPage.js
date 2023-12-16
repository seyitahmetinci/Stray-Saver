import classes from "./Style.css";
import React from "react";
import vet from "./icons/vet.png";
import donation from "./icons/donation.png";
import plus from "./icons/plus.png";
import user1 from "./icons/user1.jpg";
import petfood from "./icons/pet-food.png";
import petcare from "./icons/pet-care.png";
import pictvet from "./pictures/vet.png";
import picthome from "./pictures/home.png";
import pictpetfood24 from "./pictures/pet-food24.png";
import pictalvan from "./pictures/alvan-nee-73flblFUksY-unsplash.png";
import pictscreen from "./pictures/screenshot.png";
import Navigation from "./Cards/navigation/navigation";
import Footer from "./Cards/Footer/Footer";


const MainPage = () => {

    return (
        <div>
            {/* Required meta tags */}
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* Bootstrap CSS */}
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                  rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                  crossorigin="anonymous"
            />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                    crossOrigin="anonymous"/>
            <link rel="stylesheet" href="./Style.css"/>
                <title>Stray Saver</title>

            <div>

                {/*Navigation starts*/}
                <Navigation />

                {/*Main starts*/}
                <div class="container-fluid p-4 p-md-5 mb-1 mt-4 text-body-emphasis"
                     style={{ color: 'white', backgroundImage: 'linear-gradient(rgb(112, 158, 13,1), rgb(59, 82, 5))' }}>
                    <div class=" col-lg-6 px-0">
                        <h1 class="display-3 fw-bold" >Animals are Part of Our Family</h1>
                        <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
                    </div>
                </div>
                <div className=" text-end mt-5"><img class="text-end"
                                                     src={pictscreen}
                                                     style={{ width: '510px', height: '330px', position: 'absolute', left: '60%', bottom: '180px' }}
                                                     alt="dog and cat photo"/>

                    <div className="" style={{ position: 'absolute', left: '-12%', bottom: '-210px' }}/>

                        <div className=""><img src={pictalvan}
                                               width="900px" height="600px"
                                               style={{ position: 'absolute', left: '-12%', bottom: '-210px' }}
                                               alt="Dogs are running"/>

                            <div className=" col-lg-6 px-0" style={{ position: 'relative', left: '50%', bottom: '-150px' }}>
                                <h1 className="display-3 fw-bold">Animals are Part of Our Family</h1>
                                <p className="lead my-3">Multiple lines of text that form the lede, informing new
                                    readers quickly and efficiently about what’s most interesting in this post’s
                                    contents.</p>
                            </div>

                        </div>


                        {/*Starting moddules*/}
                        <div className="px-4 pt-5 my-5 text-center ">
                            <h1 className="display-4 fw-bold mb-3">Stray animal deserves <br/> to be hosted!</h1>
                            <div className="col-lg-6 mx-auto mt-5">
                                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                                    <img class="mx-2" src={picthome} width="40px" height="40px" alt=""/><h4
                                    class="mt-1">Have home</h4>
                                    <img class="mx-2" src={pictpetfood24} width="40px" height="40px"
                                         alt=""/>
                                    <h4 class="mt-1">Eat Food</h4>
                                    <img class="mx-2" src={pictvet} width="40px" height="40px" alt=""/><h4
                                    class="mt-1">Take care</h4>
                                </div>
                            </div>
                        </div>

                        {/*Modules*/}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div className="row row-cols-2 row-cols-md-2 mb-3 w-50 p-3 ">
                                <div className="col">
                                    <div className="card mb-4 rounded-3 shadow-sm border-2">

                                        <div className="card-body">
                                            <div className="text-center"><img class=" mb-4" src={donation} alt=""
                                                                              width="125" height="125"/>

                                                <button type="button" class="w-100 btn btn-lg "
                                                        style={{ color: '#248B0D', borderColor: '#fff', fontWeight: 600 }}>Adopt
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card mb-4 rounded-3 shadow-sm border-2">
                                            <div className="card-body">
                                                <div className="text-center"><img class=" mb-4" src={petcare} alt=""
                                                                                  width="125" height="125"/>

                                                    <button type="button" class="w-100 btn btn-lg "
                                                            style={{ color: '#248B0D', borderColor: '#fff', fontWeight: 600 }}>Donate
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card mb-4 rounded-3 shadow-sm border-2">
                                                <div className="card-body">
                                                    <div className="text-center"><img class=" mb-4" src={petfood} alt=""
                                                                                      width="125" height="125"/>

                                                        <button type="button" class="w-100 btn btn-lg "
                                                                style={{ color: '#248B0D', borderColor: '#fff', fontWeight: 600 }}>Report
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="card mb-4 rounded-3 shadow-sm border-2">

                                                    <div className="card-body">
                                                        <div className="text-center"><img class=" mb-4" src={vet} alt=""
                                                                                          width="125" height="125"/>

                                                            <button type="button" class="w-100 btn btn-lg "
                                                                    style={{ color: '#248B0D', borderColor: '#fff', fontWeight: 600 }}>Volunteer
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/*From this part comment section starts*/}
                                        <section style={{backgroundColor: 'rgb(118, 165, 14)'}}>
                                            <h4 style={{textAlign: 'center', margin: '15px'}}>What Our Happy Users
                                                Say</h4>
                                            <div className="container my-2 py-1">
                                                <div className="row d-flex justify-content-center mb-5">
                                                    <div className="col-md-12 col-lg-10">
                                                        <div className="card text-dark">
                                                            <div className="card-body p-4">

                                                                <div className="d-flex flex-start">
                                                                    <img class="rounded-circle shadow-1-strong me-3"
                                                                         src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp"
                                                                         alt="avatar" width="60"
                                                                         height="60"/>
                                                                    <div>
                                                                        <h6 class="fw-bold mb-1">Maggie Marsh</h6>
                                                                        <div className="d-flex align-items-center mb-3">
                                                                            <p className="mb-0">
                                                                                March 07, 2021
                                                                                <span
                                                                                    class="badge bg-primary">Pending</span>
                                                                            </p>
                                                                            <a href="#" class="link-muted"><i
                                                                                class="fas fa-pencil-alt ms-2"></i></a>
                                                                            <a href="#" class="link-muted"><i
                                                                                class="fas fa-redo-alt ms-2"></i></a>
                                                                            <a href="#" class="link-muted"><i
                                                                                class="fas fa-heart ms-2"></i></a>
                                                                        </div>
                                                                        <p className="mb-0">
                                                                            Lorem Ipsum is simply dummy text of the
                                                                            printing and typesetting
                                                                            industry. Lorem Ipsum has been the
                                                                            industry's standard dummy text ever
                                                                            since the 1500s, when an unknown printer
                                                                            took a galley of type and
                                                                            scrambled it.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <hr class="my-0"/>

                                                            <div className="card-body p-4">
                                                                <div className="d-flex flex-start">
                                                                    <img class="rounded-circle shadow-1-strong me-3"
                                                                         src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp"
                                                                         alt="avatar" width="60"
                                                                         height="60"/>
                                                                    <div>
                                                                        <h6 class="fw-bold mb-1">Lara Stewart</h6>
                                                                        <div className="d-flex align-items-center mb-3">
                                                                            <p className="mb-0">
                                                                                March 15, 2021
                                                                                <span
                                                                                    class="badge bg-success">Approved</span>
                                                                            </p>
                                                                            <a href="#" class="link-muted"><i
                                                                                class="fas fa-pencil-alt ms-2"></i></a>
                                                                            <a href="#" class="text-success"><i
                                                                                class="fas fa-redo-alt ms-2"></i></a>
                                                                            <a href="#" class="link-danger"><i
                                                                                class="fas fa-heart ms-2"></i></a>
                                                                        </div>
                                                                        <p className="mb-0">
                                                                            Contrary to popular belief, Lorem Ipsum is
                                                                            not simply random text. It
                                                                            has roots in a piece of classical Latin
                                                                            literature from 45 BC, making it
                                                                            over 2000 years old. Richard McClintock, a
                                                                            Latin professor at
                                                                            Hampden-Sydney College in Virginia, looked
                                                                            up one of the more obscure
                                                                            Latin words, consectetur, from a Lorem Ipsum
                                                                            passage, and going through
                                                                            the cites.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <hr className="my-0" style={{height: '1px'}}/>

                                                            <div className="card-body p-4">
                                                                <div className="d-flex flex-start">
                                                                    <img class="rounded-circle shadow-1-strong me-3"
                                                                         src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(33).webp"
                                                                         alt="avatar" width="60"
                                                                         height="60"/>
                                                                    <div>
                                                                        <h6 class="fw-bold mb-1">Alexa Bennett</h6>
                                                                        <div className="d-flex align-items-center mb-3">
                                                                            <p className="mb-0">
                                                                                March 24, 2021
                                                                                <span
                                                                                    class="badge bg-danger">Rejected</span>
                                                                            </p>
                                                                            <a href="#" class="link-muted"><i
                                                                                class="fas fa-pencil-alt ms-2"></i></a>
                                                                            <a href="#" class="link-muted"><i
                                                                                class="fas fa-redo-alt ms-2"></i></a>
                                                                            <a href="#" class="link-muted"><i
                                                                                class="fas fa-heart ms-2"></i></a>
                                                                        </div>
                                                                        <p className="mb-0">
                                                                            There are many variations of passages of
                                                                            Lorem Ipsum available, but the
                                                                            majority have suffered alteration in some
                                                                            form, by injected humour, or
                                                                            randomised words which don't look even
                                                                            slightly believable. If you are
                                                                            going to use a passage of Lorem Ipsum, you
                                                                            need to be sure.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <hr class="my-0"/>

                                                            <div className="card-body p-4">
                                                                <div className="d-flex flex-start">
                                                                    <img class="rounded-circle shadow-1-strong me-3"
                                                                         src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(24).webp"
                                                                         alt="avatar" width="60"
                                                                         height="60"/>
                                                                    <div>
                                                                        <h6 class="fw-bold mb-1">Betty Walker</h6>
                                                                        <div className="d-flex align-items-center mb-3">
                                                                            <p className="mb-0">
                                                                                March 30, 2021
                                                                                <span
                                                                                    class="badge bg-primary">Pending</span>
                                                                            </p>
                                                                            <a href="#" class="link-muted"><i
                                                                                class="fas fa-pencil-alt ms-2"></i></a>
                                                                            <a href="#" class="link-muted"><i
                                                                                class="fas fa-redo-alt ms-2"></i></a>
                                                                            <a href="#" class="link-muted"><i
                                                                                class="fas fa-heart ms-2"></i></a>
                                                                        </div>
                                                                        <p className="mb-0">
                                                                            It uses a dictionary of over 200 Latin
                                                                            words, combined with a handful of
                                                                            model sentence structures, to generate Lorem
                                                                            Ipsum which looks
                                                                            reasonable. The generated Lorem Ipsum is
                                                                            therefore always free from
                                                                            repetition, injected humour, or
                                                                            non-characteristic words etc.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>





                                    </div>

                                </div>

                            </div>
                        </div>
                </div>

            </div>
            {/*footer*/}

            <Footer />
        </div>
    )
};
export default MainPage;