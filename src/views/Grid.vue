<template>
    <main class="main container">
        <h1>Grid</h1>

        <h2>Simple</h2>

        <h3>Simple (row, no-gutter, col)</h3>

        <Row class="no-gutter">
            <Col>
                <div>1</div>
            </Col>
        </Row>

        <Row class="no-gutter">
            <Col>
                <div>2</div>
            </Col>
            <Col>
                <div>2</div>
            </Col>
        </Row>

        <Row class="no-gutter">
            <Col>
                <div>3</div>
            </Col>
            <Col>
                <div>3</div>
            </Col>
            <Col>
                <div>3</div>
            </Col>
        </Row>

        <br>

        <Row>
            <Col>
                <div>1</div>
            </Col>
        </Row>

        <Row>
            <Col>
                <div>2</div>
            </Col>
            <Col>
                <div>2</div>
            </Col>
        </Row>

        <Row>
            <Col>
                <div>3</div>
            </Col>
            <Col>
                <div>3</div>
            </Col>
            <Col>
                <div>3</div>
            </Col>
        </Row>

        <hr>
        <!-- ===================================================================================================== -->

        <h3>Simple (row, no-gutter, col)</h3>

        <div class="row no-gutter">
            <div class="col">
                <div>1</div>
            </div>
        </div>
        <div class="row no-gutter">
            <div class="col">
                <div>2</div>
            </div>
            <div class="col">
                <div>2</div>
            </div>
        </div>
        <div class="row no-gutter">
            <div class="col">
                <div>3</div>
            </div>
            <div class="col">
                <div>3</div>
            </div>
            <div class="col">
                <div>3</div>
            </div>
        </div>

        <br>

        <div class="row">
            <div class="col">
                <div>1</div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div>2</div>
            </div>
            <div class="col">
                <div>2</div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div>3</div>
            </div>
            <div class="col">
                <div>3</div>
            </div>
            <div class="col">
                <div>3</div>
            </div>
        </div>

        <h3>Max limit (row-x)</h3>

        <div class="row-3 no-gutter">
            <div class="col">
                <div>1</div>
            </div>
            <div class="col">
                <div>1</div>
            </div>
            <div class="col">
                <div>1</div>
            </div>
            <div class="col">
                <div>1</div>
            </div>
            <div class="col">
                <div>1</div>
            </div>
        </div>

        <br>

        <div class="row-3">
            <div class="col">
                <div>1</div>
            </div>
            <div class="col">
                <div>1</div>
            </div>
            <div class="col">
                <div>1</div>
            </div>
            <div class="col">
                <div>1</div>
            </div>
            <div class="col">
                <div>1</div>
            </div>
        </div>

        <h3>Offsets (offset-x)</h3>
        <div class="row no-gutter">
            <div class="col offset-1">
                <div>1</div>
            </div>
            <div class="offset-1"></div>
        </div>
        <div class="row no-gutter">
            <div class="col offset-2">
                <div>1</div>
            </div>
            <div class="offset-2"></div>
        </div>
        <div class="row no-gutter">
            <div class="col offset-3">
                <div>1</div>
            </div>
            <div class="offset-3"></div>
        </div>
        <div class="row no-gutter">
            <div class="col offset-4">
                <div>1</div>
            </div>
            <div class="offset-4"></div>
        </div>
        <div class="row no-gutter">
            <div class="col offset-5">
                <div>1</div>
            </div>
            <div class="offset-5"></div>
        </div>

        <br>

        <div class="row">
            <div class="col offset-1">
                <div>1</div>
            </div>
            <div class="offset-1"></div>
        </div>
        <div class="row">
            <div class="col offset-2">
                <div>1</div>
            </div>
            <div class="offset-2"></div>
        </div>
        <div class="row">
            <div class="col offset-3">
                <div>1</div>
            </div>
            <div class="offset-3"></div>
        </div>
        <div class="row">
            <div class="col offset-4">
                <div>1</div>
            </div>
            <div class="offset-4"></div>
        </div>
        <div class="row">
            <div class="col offset-5">
                <div>1</div>
            </div>
            <div class="offset-5"></div>
        </div>

        <h3>Columns (col-x)</h3>
        <div class="row no-gutter">
            <div class="col-1">
                <div>1</div>
            </div>
            <div class="col-1">
                <div>1</div>
            </div>
            <div class="col-1">
                <div>1</div>
            </div>
            <div class="col-1">
                <div>1</div>
            </div>
            <div class="col-1">
                <div>1</div>
            </div>
            <div class="col-1">
                <div>1</div>
            </div>
            <div class="col-1">
                <div>1</div>
            </div>
            <div class="col-1">
                <div>1</div>
            </div>
            <div class="col-1">
                <div>1</div>
            </div>
            <div class="col-1">
                <div>1</div>
            </div>
            <div class="col-1">
                <div>1</div>
            </div>
            <div class="col-1">
                <div>1</div>
            </div>
        </div>

        <div class="row no-gutter">
            <div class="col-2">
                <div>2</div>
            </div>
            <div class="col-2">
                <div>2</div>
            </div>
            <div class="col-2">
                <div>2</div>
            </div>
            <div class="col-2">
                <div>2</div>
            </div>
            <div class="col-2">
                <div>2</div>
            </div>
            <div class="col-2">
                <div>2</div>
            </div>
        </div>

        <div class="row no-gutter">
            <div class="col-3">
                <div>3</div>
            </div>
            <div class="col-3">
                <div>3</div>
            </div>
            <div class="col-3">
                <div>3</div>
            </div>
            <div class="col-3">
                <div>3</div>
            </div>
        </div>

        <div class="row no-gutter">
            <div class="col-4">
                <div>4</div>
            </div>
            <div class="col-4">
                <div>4</div>
            </div>
            <div class="col-4">
                <div>4</div>
            </div>
        </div>

        <div class="row no-gutter">
            <div class="col-6">
                <div>6</div>
            </div>
            <div class="col-6">
                <div>6</div>
            </div>
        </div>

        <div class="row no-gutter">
            <div class="col-12">
                <div>12</div>
            </div>
        </div>

        <br>

        <div class="row">
            <div class="col-1">
                <div>1</div>
            </div>
            <div class="col-1">
                <div>1</div>
            </div>
            <div class="col-1">
                <div>1</div>
            </div>
            <div class="col-1">
                <div>1</div>
            </div>
            <div class="col-1">
                <div>1</div>
            </div>
            <div class="col-1">
                <div>1</div>
            </div>
            <div class="col-1">
                <div>1</div>
            </div>
            <div class="col-1">
                <div>1</div>
            </div>
            <div class="col-1">
                <div>1</div>
            </div>
            <div class="col-1">
                <div>1</div>
            </div>
            <div class="col-1">
                <div>1</div>
            </div>
            <div class="col-1">
                <div>1</div>
            </div>
        </div>

        <div class="row">
            <div class="col-2">
                <div>2</div>
            </div>
            <div class="col-2">
                <div>2</div>
            </div>
            <div class="col-2">
                <div>2</div>
            </div>
            <div class="col-2">
                <div>2</div>
            </div>
            <div class="col-2">
                <div>2</div>
            </div>
            <div class="col-2">
                <div>2</div>
            </div>
        </div>

        <div class="row">
            <div class="col-3">
                <div>3</div>
            </div>
            <div class="col-3">
                <div>3</div>
            </div>
            <div class="col-3">
                <div>3</div>
            </div>
            <div class="col-3">
                <div>3</div>
            </div>
        </div>

        <div class="row">
            <div class="col-4">
                <div>4</div>
            </div>
            <div class="col-4">
                <div>4</div>
            </div>
            <div class="col-4">
                <div>4</div>
            </div>
        </div>

        <div class="row">
            <div class="col-6">
                <div>6</div>
            </div>
            <div class="col-6">
                <div>6</div>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <div>12</div>
            </div>
        </div>

        <h3>Auto width</h3>

        <div class="row no-gutter">
            <div class="col">
                <div>auto</div>
            </div>
        </div>
        <div class="row no-gutter">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col-1">
                <div>1</div>
            </div>
        </div>
        <div class="row no-gutter">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col-2">
                <div>2</div>
            </div>
        </div>
        <div class="row no-gutter">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col-3">
                <div>3</div>
            </div>
        </div>
        <div class="row no-gutter">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col-4">
                <div>4</div>
            </div>
        </div>
        <div class="row no-gutter">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col-5">
                <div>5</div>
            </div>
        </div>
        <div class="row no-gutter">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col-6">
                <div>6</div>
            </div>
        </div>
        <div class="row no-gutter">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col-7">
                <div>7</div>
            </div>
        </div>
        <div class="row no-gutter">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col-8">
                <div>8</div>
            </div>
        </div>
        <div class="row no-gutter">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col-9">
                <div>9</div>
            </div>
        </div>
        <div class="row no-gutter">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col-10">
                <div>10</div>
            </div>
        </div>
        <div class="row no-gutter">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col-11">
                <div>11</div>
            </div>
        </div>
        <div class="row no-gutter">
            <div class="col-12">
                <div>12</div>
            </div>
        </div>

        <br>

        <div class="row">
            <div class="col">
                <div>auto</div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col-1">
                <div>1</div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col-2">
                <div>2</div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col-3">
                <div>3</div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col-4">
                <div>4</div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col-5">
                <div>5</div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col-6">
                <div>6</div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col-7">
                <div>7</div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col-8">
                <div>8</div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col-9">
                <div>9</div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col-10">
                <div>10</div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col-11">
                <div>11</div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div>12</div>
            </div>
        </div>

        <h3>Mix column (row-x & col-x)</h3>
        <div class="row-6 no-gutter">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>

            <div class="col">
                <div>auto</div>
            </div>
            <div class="col-8">
                <div>8</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>

            <div class="col">
                <div>auto</div>
            </div>
            <div class="col-1">
                <div>1</div>
            </div>
            <div class="col-2">
                <div>2</div>
            </div>
            <div class="col-5">
                <div>5</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
        </div>

        <br>

        <div class="row-6">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>

            <div class="col">
                <div>auto</div>
            </div>
            <div class="col-8">
                <div>8</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>

            <div class="col">
                <div>auto</div>
            </div>
            <div class="col-1">
                <div>1</div>
            </div>
            <div class="col-2">
                <div>2</div>
            </div>
            <div class="col-5">
                <div>5</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
        </div>

        <h3>Justify content (row, is-left, is-center, is-right)</h3>

        <div class="row">
            <div class="col">
                <div>auto</div>
            </div>
        </div>
        <div class="row is-left">
            <div class="col-1">
                <div>A</div>
            </div>
            <div class="col-1">
                <div>B</div>
            </div>
            <div class="col-1">
                <div>C</div>
            </div>
        </div>
        <div class="row is-center">
            <div class="col-1">
                <div>A</div>
            </div>
            <div class="col-1">
                <div>B</div>
            </div>
            <div class="col-1">
                <div>C</div>
            </div>
        </div>
        <div class="row is-right">
            <div class="col-1">
                <div>A</div>
            </div>
            <div class="col-1">
                <div>B</div>
            </div>
            <div class="col-1">
                <div>C</div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div>auto</div>
            </div>
        </div>


        <h3>Nested (row > col > row > col)</h3>

        <div class="row no-gutter">
            <div class="col">
                <div>1</div>
            </div>
            <div class="col">
                <div>1</div>
            </div>
        </div>
        <div class="row no-gutter">
            <div class="col">
                <div>1</div>
            </div>
            <div class="col">
                <div class="row no-gutter">
                    <div class="col">
                        <div>A</div>
                    </div>
                </div>
                <div class="row no-gutter">
                    <div class="col">
                        <div>B</div>
                    </div>
                    <div class="col">
                        <div>C</div>
                    </div>
                    <div class="col">
                        <div class="row no-gutter">
                            <div class="col">
                                <div>X</div>
                            </div>
                        </div>
                        <div class="row no-gutter">
                            <div class="col">
                                <div>Y</div>
                            </div>
                            <div class="col">
                                <div>Z</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <br>

        <div class="row">
            <div class="col">
                <div>1</div>
            </div>
            <div class="col">
                <div>1</div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div>1</div>
            </div>
            <div class="col">
                <div class="row">
                    <div class="col">
                        <div>A</div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div>B</div>
                    </div>
                    <div class="col">
                        <div>C</div>
                    </div>
                    <div class="col">
                        <div class="row">
                            <div class="col">
                                <div>X</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div>Y</div>
                            </div>
                            <div class="col">
                                <div>Z</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <h2>Responsive </h2>
        <h3>Responsive in rows (xs sm md lg)</h3>

        <table class="table is-border">
            <thead>
            <tr>
                <th></th>
                <th>mobile &lt;=40em</th>
                <th>40em &lt;= tablet &lt; 64em</th>
                <th>64em &lt;= desktop &lt; 90em</th>
                <th>90em &lt;= widescreen</th>
            </tr>
            </thead>

            <tbody>
            <tr>
                <th>prefix</th>
                <td class="color-mobile">col-mobile-</td>
                <td class="color-tablet">col-tablet-</td>
                <td class="color-desktop">col-desktop-</td>
                <td class="color-widescreen">col-widescreen-</td>
            </tr>
            <tr>
                <th>gutter with</th>
                <td>0.25rem</td>
                <td>0.50rem</td>
                <td>0.75rem</td>
                <td>1rem</td>
            </tr>
            </tbody>

        </table>

        <h4>Columns in row mobile (row mobile-x)</h4>
        <div class="row mobile-1 no-gutter">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
        </div>
        <div class="row mobile-2 no-gutter">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
        </div>
        <div class="row mobile-3 no-gutter">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
        </div>

        <h4>Columns in row tablet (row tablet-x)</h4>
        <div class="row tablet-1 no-gutter">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
        </div>
        <div class="row tablet-2 no-gutter">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
        </div>
        <div class="row tablet-3 no-gutter">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
        </div>

        <h4>Columns in row desktop (row desktop-x)</h4>
        <div class="row desktop-1 no-gutter">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
        </div>
        <div class="row desktop-2 no-gutter">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
        </div>
        <div class="row desktop-3 no-gutter">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
        </div>

        <h4>Columns in row widescreen (row widescreen-x)</h4>
        <div class="row widescreen-1 no-gutter">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
        </div>
        <div class="row widescreen-2 no-gutter">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
        </div>
        <div class="row widescreen-3 no-gutter">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
        </div>

        <h4>Mix (row & mobile-1 tablet-2 desktop-3 widescreen-4)</h4>
        <div class="row mobile-1 tablet-2 desktop-3 widescreen-4 no-gutter">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
        </div>

        <h4>Mix (row & mobile-4 tablet-3 desktop-2 widescreen-1)</h4>
        <div class="row mobile-4 tablet-3 desktop-2 widescreen-1 no-gutter">
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
            <div class="col">
                <div>auto</div>
            </div>
        </div>

        <h3>Responsive in cols (mobile tablet desktop widescreen)</h3>
        <h4>Columns (col mobile-3 tablet-3 desktop-3 widescreen-3)</h4>
        <div class="row no-gutter">
            <div class="col mobile-3">
                <div>mobile-3</div>
            </div>
            <div class="col mobile-3">
                <div>mobile-3</div>
            </div>
            <div class="col mobile-3">
                <div>mobile-3</div>
            </div>
            <div class="col mobile-3">
                <div>mobile-3</div>
            </div>
        </div>
        <div class="row no-gutter">
            <div class="col tablet-3">
                <div>tablet-3</div>
            </div>
            <div class="col tablet-3">
                <div>tablet-3</div>
            </div>
            <div class="col tablet-3">
                <div>tablet-3</div>
            </div>
            <div class="col tablet-3">
                <div>tablet-3</div>
            </div>
        </div>
        <div class="row no-gutter">
            <div class="col desktop-3">
                <div>desktop-3</div>
            </div>
            <div class="col desktop-3">
                <div>desktop-3</div>
            </div>
            <div class="col desktop-3">
                <div>desktop-3</div>
            </div>
            <div class="col desktop-3">
                <div>desktop-3</div>
            </div>
        </div>
        <div class="row no-gutter">
            <div class="col widescreen-3">
                <div>widescreen-3</div>
            </div>
            <div class="col widescreen-3">
                <div>widescreen-3</div>
            </div>
            <div class="col widescreen-3">
                <div>widescreen-3</div>
            </div>
            <div class="col widescreen-3">
                <div>widescreen-3</div>
            </div>
        </div>

        <h4>Columns (col mobile-4 tablet-4 desktop-4 widescreen-4)</h4>
        <div class="row no-gutter">
            <div class="col mobile-4">
                <div>mobile-4</div>
            </div>
            <div class="col mobile-4">
                <div>mobile-4</div>
            </div>
            <div class="col mobile-4">
                <div>mobile-4</div>
            </div>
        </div>
        <div class="row no-gutter">
            <div class="col tablet-4">
                <div>tablet-4</div>
            </div>
            <div class="col tablet-4">
                <div>tablet-4</div>
            </div>
            <div class="col tablet-4">
                <div>tablet-4</div>
            </div>
        </div>
        <div class="row no-gutter">
            <div class="col widescreen-4">
                <div>desktop-4</div>
            </div>
            <div class="col widescreen-4">
                <div>desktop-4</div>
            </div>
            <div class="col widescreen-4">
                <div>desktop-4</div>
            </div>
        </div>
        <div class="row no-gutter">
            <div class="col widescreen-4">
                <div>widescreen-4</div>
            </div>
            <div class="col widescreen-4">
                <div>widescreen-4</div>
            </div>
            <div class="col widescreen-4">
                <div>widescreen-4</div>
            </div>
        </div>

        <h4>Mix columns (col mobile-12 tablet-6 desktop-4 widescreen-3)</h4>
        <div class="row no-gutter">
            <div class="col mobile-12 tablet-6 desktop-4 widescreen-3">
                <div>col</div>
            </div>
            <div class="col mobile-12 tablet-6 desktop-4 widescreen-3">
                <div>col</div>
            </div>
            <div class="col mobile-12 tablet-6 desktop-4 widescreen-3">
                <div>col</div>
            </div>
            <div class="col mobile-12 tablet-6 desktop-4 widescreen-3">
                <div>col</div>
            </div>
            <div class="col mobile-12 tablet-6 desktop-4 widescreen-3">
                <div>col</div>
            </div>
            <div class="col mobile-12 tablet-6 desktop-4 widescreen-3">
                <div>col</div>
            </div>
            <div class="col mobile-12 tablet-6 desktop-4 widescreen-3">
                <div>col</div>
            </div>
            <div class="col mobile-12 tablet-6 desktop-4 widescreen-3">
                <div>col</div>
            </div>
            <div class="col mobile-12 tablet-6 desktop-4 widescreen-3">
                <div>col</div>
            </div>
            <div class="col mobile-12 tablet-6 desktop-4 widescreen-3">
                <div>col</div>
            </div>
            <div class="col mobile-12 tablet-6 desktop-4 widescreen-3">
                <div>col</div>
            </div>
            <div class="col mobile-12 tablet-6 desktop-4 widescreen-3">
                <div>col</div>
            </div>
        </div>

        <h4>Mix columns (col mobile-12 tablet-6)</h4>
        <div class="row no-gutter">
            <div class="col mobile-12 tablet-6">
                <div>col</div>
            </div>
            <div class="col mobile-12 tablet-6">
                <div>col</div>
            </div>
            <div class="col mobile-12 tablet-6">
                <div>col</div>
            </div>
            <div class="col mobile-12 tablet-6">
                <div>col</div>
            </div>
            <div class="col mobile-12 tablet-6">
                <div>col</div>
            </div>
            <div class="col mobile-12 tablet-6">
                <div>col</div>
            </div>
            <div class="col mobile-12 tablet-6">
                <div>col</div>
            </div>
            <div class="col mobile-12 tablet-6">
                <div>col</div>
            </div>
            <div class="col mobile-12 tablet-6">
                <div>col</div>
            </div>
            <div class="col mobile-12 tablet-6">
                <div>col</div>
            </div>
            <div class="col mobile-12 tablet-6">
                <div>col</div>
            </div>
            <div class="col mobile-12 tablet-6">
                <div>col</div>
            </div>
        </div>

        <br>

    </main>
</template>

<script>
    import { Col, Row } from "@/ui";
    export default {
        components: {Col, Row}
    };
</script>

<style>
    .col > div, [class*=col-] > div:not([class*=row]) {
        text-align: center;
        outline: 1px dashed #ff795a;
    }

    @media all {
        .main {
            background-color: #ffffff; /*xs*/
        }
    }

    @media all and (min-width: 40em) {
        .main {
            background-color: #ffffe0; /*sm*/
        }
    }

    @media all and (min-width: 64em) {
        .main {
            background-color: #e0ffff; /*md*/
        }
    }

    @media all and (min-width: 90em) {
        .main {
            background-color: #fafafa; /*lg*/
        }
    }

    .col > div:not([class*=row]) {
        width: 100%;
        background-color: #e0e0e0;
        text-align: center;
    }

    [class*=col-] > div:not([class*=row]) {
        width: 100%;
        background-color: #d0d0d0;
        text-align: center;
    }
</style>
